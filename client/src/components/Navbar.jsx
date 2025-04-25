export default function Navbar() {
    return (
        <header className="flex justify-center items-center p-4 bg-gray-900 shadow-lg sticky top-0 z-50">
            <div className="flex justify-start items-center w-[15%]">
                <div className="w-[40px] min-w-[40px] hover:bg-gray-700 rounded-full p-2 transition-all duration-200">
                    <img src="/assets/hamburger.png" alt="menu" className="w-[40px]" />
                </div>
                <div className="hidden sm:flex ml-6 justify-center items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <img src="/assets/youtubeLogo.png" alt="" className="w-[20px] sm:w-[30px] md:w-[40px]" />
                    <h1 className="flex justify-center items-center text-[15px] md:text-[25px] h-[40px] font-bold text-white">YouTube</h1>
                </div>
            </div>
            <div className="w-[60%] sm:w-[70%] flex justify-center content-center">
                <div className="w-[100%] flex justify-center content-center">
                    <input 
                        type="text" 
                        className="bg-gray-800 text-white border border-gray-600 w-[150px] sm:w-[50%] h-[40px] rounded-l-[50px] px-6 focus:outline-none focus:border-blue-500 transition-all duration-200" 
                        placeholder="Search" 
                    />
                    <button className="hover:bg-gray-700 border border-gray-600 bg-gray-800 w-[50px] h-[40px] flex justify-center content-center rounded-r-[50px] transition-all duration-200">
                        <img src="/assets/search.png" alt="search" className="w-[35px]" />
                    </button>
                </div>
            </div>
            <div className="w-[15%] flex justify-end items-center">
                <div className="cursor-pointer flex justify-center items-center gap-2 p-2 hover:bg-gray-700 rounded-full transition-all duration-200">
                    <img src="/UI/user.png" alt="" className="h-[40px]" />
                    <div className="flex justify-center items-center text-white font-medium">Sign In</div>
                </div>
            </div>
        </header>
    )
}