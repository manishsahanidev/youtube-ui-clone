interface SearchBarProps {
    isMobile?: boolean
    isOpen?: boolean
    onClose?: () => void
}

export const SearchBar = ({ isMobile = false, isOpen = true, onClose }: SearchBarProps) => {
    // on mobile if open true? render!
    if (isMobile && !isOpen) return null

    // Mobile version
    if (isMobile) {
        return (
            <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0f0f0f]  border-b shadow-md">
                <div className="flex items-center px-4 py-2">
                    {/* Back button */}
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full mr-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>

                    {/* Mobile search input */}
                    <div className="flex flex-1">
                        <input
                            type="text"
                            placeholder="Search YouTube"
                            autoFocus
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 text-base"
                        />
                        <button className="px-6 py-2 bg-[#0f0f0f] border border-l-0 border-gray-300 rounded-r-full hover:bg-[#212121] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Voice search for mobile */}
                    <button className="ml-2 p-2 hover:bg-gray-100 rounded-full">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }

    // Desktop version
    return (
        <div className="flex items-center w-full max-w-2xl">
            <div className="flex flex-1">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 text-base"
                />
                <button className="px-6 py-2 bg-[#0f0f0f] border border-l-0 border-gray-300 rounded-r-full hover:bg-[#212121] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
            {/* Voice search button */}
            <button className="ml-2 p-2 hover:bg-[#212121] rounded-full">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}