import React, { useState } from 'react';
import {
    MdAdd,
    MdSupervisorAccount,
    MdGridView,
    MdOutlineDataSaverOff
} from 'react-icons/md';

function SideBar() {
    return ( 
        <div className='flex flex-row bg-primary shadow-2xl absolute bottom-0 w-screen'>
            <SideBarIcon icon={<MdAdd className="h-8 w-8"/>} text="Favourites"/>
            <SideBarIcon icon={<MdGridView className="h-8 w-8"/>} text="Past Reviews"/>
            <SideBarIcon icon={<MdOutlineDataSaverOff className="h-8 w-8"/>} text="My Data"/>
            <SideBarIcon icon={<MdSupervisorAccount className="h-8 w-8"/>} text="User Settings"/>

        </div>
     );
}

const SideBarIcon = ({icon, text= "tooltip"}) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span> 
    </div>
);

export default SideBar;