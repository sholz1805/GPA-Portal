import React from 'react';
import { RiSettingsLine, RiNotification4Line  } from "react-icons/ri";
const Navbar = ({openSidebar}) => {

    const handleClick = () => {
        openSidebar(true)
    }

    return (
        <header className="fixed w-full items-center z-10 px-6 py-8 bg-[#FFFFFF] h-[88px]">
            <div className="lg:hidden block">
                <div className="flex space-x-4">
                    <button onClick={handleClick} className="text-gray-500 focus:outline-none lg:hidden">
                        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <div>
                        <h1 className="text-[16px] font-[500] text-[#0D0D0D]">Welcome, Isaac AKINYEMI</h1>
                    </div>
                </div>
            </div>
            <div className="lg:block hidden">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-[16px] font-[500] text-[#0D0D0D]">Welcome, Isaac AKINYEMI</h1>
                    </div>
                    <div className="flex items-center space-x-4 mr-80">
                        <RiSettingsLine/>
                        <RiNotification4Line/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;