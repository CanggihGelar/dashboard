import React from 'react'
import './Update.css'
import { UpdatesData } from '../../data/Data'

const Update = () => {
  return (
    <div className="Updates">
        {UpdatesData.map((update)=>{
            return (
                <div className="updated">
                    <img src={update.img} alt="" />
                    <div className="notif">
                        <div style={{marginBottom: '0.5rem'}}>
                            <span>{update.name}</span>
                            <span>{update.not}</span>
                        </div>
                        <span>{update.time}</span>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Update
