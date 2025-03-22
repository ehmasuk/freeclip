"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { triggerConfetti } from "@/helpers/triggerConfetti";
import useScreenRecorder from "@/hooks/useScreenRecorder";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useState } from "react";
import { RainbowButton } from "./magicui/rainbow-button";
import { Ripple } from "./magicui/ripple";

function Recorder() {
    const { isRecording, startRecording, stopRecording, recordTime, isPaused, pauseRecording, resumeRecording } = useScreenRecorder({ videoId: "recordedVideo", downloadAnchorId: "download-video" });

    const handleFinishVideo = () => {
        stopRecording();
        setShowDownloadPopup(true);
        triggerConfetti();
    };

    const handleRecordAgain = () => {
        setShowDownloadPopup(false);
        startRecording();
    };

    const [showDownloadPopup, setShowDownloadPopup] = useState(false);

    return (
        <div className="space-y-4 grid place-items-center my-5">
            {isRecording ? (
                <div className={`grid place-items-center ${isPaused ? "bg-pink-200" : "bg-blue-200"} !m-0 z-10 fixed left-0 top-0 w-screen h-screen`}>
                    <Ripple className="z-20" />
                    <div className="bg-white z-50 rounded p-10 shadow border border-gray-200">
                        <div className="flex gap-2 items-center mb-5">
                            <div className={`size-4 rounded-full bg-red-600 ${isPaused ? "" : "animate-pulse"}`}></div>
                            <p>
                                Time: <b>{recordTime}</b> sec
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <TooltipProvider delayDuration={0}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button disabled={isPaused} className="p-2 disabled:opacity-30 bg-red-50 border-2 hover:bg-red-100 rounded border-red-300" onClick={pauseRecording}>
                                            <PauseIcon size={20} />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="dark px-2 py-1 text-xs" showArrow={true}>
                                        Pause
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider delayDuration={0}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button disabled={!isPaused} className="p-2 bg-blue-50 disabled:opacity-30 border-2 hover:bg-blue-100 rounded border-blue-300" onClick={resumeRecording}>
                                            <PlayIcon size={20} />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="dark px-2 py-1 text-xs" showArrow={true}>
                                        Play
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <button className="p-2 bg-green-50 border-2 hover:bg-green-100 rounded border-green-300" onClick={handleFinishVideo}>
                                Finish
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <RainbowButton className="mt-5 z-10 md:text-xl" onClick={startRecording}>
                        Capture Now!
                    </RainbowButton>
                </div>
            )}

            {showDownloadPopup && (
                <div className="h-screen w-screen bg-[#000000df] overflow-auto py-5 fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 inset-0 h-modal justify-center items-center">
                    <div className="relative w-full container m-auto">
                        <div className="p-2 max-w-[95vw] bg-white relative overflow-hidden">
                            <div className="w-[800px] max-w-full mx-auto">
                                <video controls id="recordedVideo" className="w-full h-full"></video>
                            </div>

                            <div className="flex justify-center gap-4 flex-wrap mt-2">
                                <a id="download-video" target="_blank" download="recorded-video.webm" href="">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-4 py-1.5">
                                        Download
                                    </button>
                                </a>
                                <button type="button" onClick={handleRecordAgain} className="text-white bg-violet-700 hover:bg-violet-800 font-medium rounded text-sm px-4 py-1.5 ">
                                    Record again
                                </button>
                                <button type="button" onClick={() => setShowDownloadPopup(false)} className="text-white bg-red-700 hover:bg-red-800 font-medium rounded text-sm px-4 py-1.5 ">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recorder;
