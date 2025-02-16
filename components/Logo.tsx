function Logo() {
    return (
        <div className="flex items-center space-x-2 p-2">
            <div className="relative w-6 h-6 bg-[#ff2975] rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#ffd319] rounded-full" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#8c1eff] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-4-4m4 4l4-4" />
                    </svg>
                </div>
            </div>
            <div className="text-xl font-semibold text-[#8c1eff]">
                FREE<span className="text-[#ff2975]">CLIP</span>
            </div>
        </div>
    );
}

export default Logo;
