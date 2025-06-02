import { Button } from "./Button"
import { Logo } from "./Logo"
import { SearchBar } from "./SearchBar"
import { useMobileSearch } from "../hooks/useMobileSearch"

export const AppBar = () => {
    const { isMobileSearchOpen, openMobileSearch, closeMobileSearch } = useMobileSearch()

    return (
        <>
            <div className="flex items-center justify-between px-4 py-2 shadow-md sticky top-0 z-50 bg-[#0f0f0f]">
                {/* Left: Logo and Hamburger Menu */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>
                </div>

                {/* Center: Search Bar (desktop only) */}
                <div className="hidden sm:flex flex-1 max-w-2xl mx-4">
                    <SearchBar />
                </div>

                {/* Right: Icons and Button */}
                <div className="flex items-center gap-2">
                    {/* Search icon for mobile */}
                    <button
                        onClick={openMobileSearch}
                        className="sm:hidden p-2 hover:bg-gray-100 rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>

                    {/* More options (mobile) */}
                    <button className="sm:hidden p-2 hover:bg-gray-100 rounded-full">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </button>

                    <div className="flex-shrink-0">
                        <Button />
                    </div>
                </div>
            </div>

            <SearchBar
                isMobile
                isOpen={isMobileSearchOpen}
                onClose={closeMobileSearch}
            />
        </>
    )
}