import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { IoGitBranchOutline } from "react-icons/io5";
import { RiCashLine, RiGroup2Line, RiUser4Line, RiArticleLine, RiTeamLine } from "react-icons/ri";
// import logo from '/public/images/GPA Logo.svg'
import {useLocation, useNavigate} from "react-router-dom";


const Sidebar = ({openSidebar, updateSidebarOpen,}) => {
    const router = useNavigate()
    const location = useLocation()
    const currentRoute = '/' + location.pathname.split('/')[1]

    const sidebarData = [
        {
            name: 'Overview',
            href: '/overview',
            route: '/overview',
            icon: <MdOutlineDashboard  />,
        },
        {
            name: 'Members',
            href: '/members',
            route: '/members',
            // icon: memberIcon,
            icon: <RiTeamLine/>,
        },{
            name: 'Zone/Branches',
            href: '/branches',
            route: '/branches',
            icon: <IoGitBranchOutline /> ,
            // icon: zoneIcon,
        },{
            name: 'Reports',
            href: '/reports',
            route: '/reports',
            icon: <RiArticleLine />,
        },{
            name: 'Financials',
            href: '/financial',
            route: '/financial',
            icon: <RiCashLine />,
        },{
            name: 'User Group',
            href: '/user',
            route: '/user',
            icon: <RiGroup2Line />,
        },{
            name: 'User Activities',
            href: '/activities',
            route: '/activities',
            icon: <RiUser4Line />,
        },
    ]
    const handleClick = () => {
        updateSidebarOpen(false)
    }

    const handleOnBlur = (val) => {
        updateSidebarOpen(false)
    }
    return (
        <div onBlur={handleOnBlur} className={`fixed inset-y-0 left-0 z-30 overflow-hidden overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 
        h-screen w-[248px] bg-[#FFFFFF] text-white drop-shadow-4xl flex flex-col px-8 ${ openSidebar ? 'translate-x-0 ease-out block' : '-translate-x-full ease-in'}`}>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4 pt-12">
                    <img src="/images/GPA%20Logo.svg" alt={'logo'}/>
                    <h1 className="text-[16px] font-[500] text-[#0D0D0D]">GPA Portal</h1>
                </div>
                {openSidebar && (
                    <div onClick={handleClick} className="mt-12">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 0.5C4.93477 0.5 0 5.43477 0 11.5C0 17.5652 4.93477 22.5 11 22.5C17.0652 22.5 22 17.5652 22 11.5C22 5.43477 17.0652 0.5 11 0.5ZM11 2.19231C16.1505 2.19231 20.3077 6.34946 20.3077 11.5C20.3077 16.6505 16.1505 20.8077 11 20.8077C5.84946 20.8077 1.69231 16.6505 1.69231 11.5C1.69231 6.34946 5.84946 2.19231 11 2.19231ZM7.80154 7.08308L6.58308 8.30154L9.78492 11.5L6.58477 14.6985L7.80323 15.9169L11 12.7159L14.1985 15.9144L15.4169 14.6985L12.2159 11.5L15.4144 8.30154L14.1985 7.08308L11 10.2849L7.80154 7.08477V7.08308Z"
                                fill="#111111"/>
                        </svg>
                    </div>
            )}
        </div>
    <div className="py-8">
        {sidebarData.map((item, index) => (
            <div key={index}
                 className={`${currentRoute.includes(item.route) && 'py-3 bg-primary rounded-full text-[#FFFFFF]'} flex items-center text-[14px] p-4 font-[400] space-x-4 text-[#0D0D0D] cursor-pointer`}
                 onClick={()=>router(item.href)}>
                        {/*<img src={item.icon} alt={'icon'} className={`${currentRoute.includes(item.route) && 'text-white'}`}/>*/}
                        <div style={{fontSize: '20px'}}>{item.icon}</div>
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;