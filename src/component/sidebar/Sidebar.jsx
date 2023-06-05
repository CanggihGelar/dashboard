import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../images/logo.png'
import {SidebarData} from '../../data/Data.js'
import{	UilSignOutAlt } from "@iconscout/react-unicons"
import { MenuItem } from '@mui/material'

const Sidebar = () => {
    const [selected, setSelected] = useState(1)
	return (
        <div className='Sidebar'>
			{/*logo*/}
			<div className='logo'>
				<img src={Logo} alt="" />
				<span>
					Sh<span>o</span>ps
				</span>
			</div>
			{/*menu*/}
			<div className='menu'>
				{SidebarData.map((item, index)=>{
					return(
						<div className={selected===index?'menuItem active':'menuItem'} 
						key={index}
						onClick={()=>setSelected(index)}
						>
							<item.icon />
							<span>
								{item.heading}
							</span>
						</div>
						)
					})
				}
				<div className="menuItem">
					<div><UilSignOutAlt /></div>
				</div>
			</div>
        </div>
    )
}

export default Sidebar;