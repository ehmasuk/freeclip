import { useRef, useState } from "react";

interface Props {
  videoId: string;
  downloadAnchorId: string;
}

function useScreenRecorder({ videoId, downloadAnchorId }: Props) {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [recordTime, setRecordTime] = useState<number>(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const chunks = useRef<Blob[]>([]);

  async function startRecording() {
    try {
      if (isPaused && mediaRecorderRef.current) {
        mediaRecorderRef.current.resume();
        setIsPaused(false);
        return;
      }

      // Get screen stream with reduced resolution
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: { ideal: 10, max: 15 },
          displaySurface: "browser",
        },
      });

      // Get microphone stream
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          noiseSuppression: true,
          echoCancellation: true,
        },
      });

      // Combine screen and audio streams
      const combinedStream = new MediaStream([...screenStream.getTracks(), ...audioStream.getTracks()]);
      streamRef.current = combinedStream;

      // Reduce bitrate to decrease file size
      const mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType: "video/webm; codecs=vp9",
        videoBitsPerSecond: 500000,
      });

      mediaRecorderRef.current = mediaRecorder;

      // Reset state
      chunks.current = [];
      setIsRecording(true);
      setIsPaused(false);
      setRecordTime(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordTime((prev) => prev + 1);
      }, 1000);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks.current, { type: "video/webm" });

        const record = URL.createObjectURL(blob);
        const videoElement = document.getElementById(videoId) as HTMLVideoElement;
        if (videoElement) videoElement.src = record;

        const anchorElement = document.getElementById(downloadAnchorId) as HTMLAnchorElement;
        if (anchorElement) anchorElement.href = record;

        if (timerRef.current) clearInterval(timerRef.current);
      };

      mediaRecorder.start();

      // Detect when screen sharing is stopped from the browser
      screenStream.getVideoTracks()[0].onended = () => {
        window.location.reload();
      };
    } catch (error) {
      console.error("Error starting screen recording:", error);
    }
  }

  function pauseRecording() {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);

      if (timerRef.current) clearInterval(timerRef.current);
    }
  }

  function resumeRecording() {
    if (mediaRecorderRef.current && isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);

      // Restart timer
      timerRef.current = setInterval(() => {
        setRecordTime((prev) => prev + 1);
      }, 1000);
    }
  }

  function stopRecording() {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      streamRef.current?.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
      setIsPaused(false);
    }
  }

  return {
    isRecording,
    isPaused,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    recordTime,
  };
}

export default useScreenRecorder;
