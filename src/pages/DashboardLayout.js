import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({children}) => {
    const [ menuOpen, setMenuOpen ] = useState(false);

    const updateSidebarOpen = (val) => {
        setMenuOpen(val)
    }

    return (
        <div className="flex bg-[#EAEEF6]">
            <Sidebar openSidebar={menuOpen}
                     updateSidebarOpen={updateSidebarOpen}/>
            <div className="flex-grow">
                <Navbar openSidebar={updateSidebarOpen}/>
                <main className=' flex-1 w-full'>
                    <div className="px-6 py-6 pt-28 mx-auto w-full">
                        <div className='w-full pt-2 lg:w-[calc(100%) - 18rem]'>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;