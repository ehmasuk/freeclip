"use client";

import Header from "@/components/Header";
import { RetroGrid } from "@/components/magicui/retro-grid";
import Recorder from "@/components/Recorder";

function HomePage() {
    return (
        <main>
            <Header />
            <section className="w-full text-center">
                <div className="relative p-5 flex !min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
                    <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center md:text-7xl text-3xl font-bold leading-none tracking-tighter text-transparent">
                        Capture Your Screen in Style
                    </span>
                    <p className="mx-auto max-w-[800px] text-gray-700 md:text-xl mt-5 dark:text-gray-300">
                        Experience the future of screen recording with ScreenCast. Free, powerful, and incredibly easy to use.
                    </p>
                    <Recorder />

                    <RetroGrid />
                </div>
            </section>
        </main>
    );
}

export default HomePage;
