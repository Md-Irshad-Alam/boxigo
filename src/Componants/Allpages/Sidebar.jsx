import React from 'react'
import style from './Style.css'
import {FaShippingFast} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa'
import {MdRequestQuote} from 'react-icons/md'
import {AiOutlineLogout} from 'react-icons/ai'
function Sidebar() {
  return (
    <div className='main-sidebar'>
        <div className="content">
            <div id="line"></div>
            <FaShippingFast fontSize="25px"/>
            <h4>my movies</h4>
        </div>
        <div className="content">
            <FaUserTie fontSize="25px"/>
            <h4>my profile</h4>
        </div>
        <div className="content">
            <MdRequestQuote fontSize="25px"/>
            <h4>get quote</h4>
        </div>
        <div className="content" style={{marginLeft:"-7px"}}>
            <AiOutlineLogout fontSize="25px"/>
            <h4>logout</h4>
        </div>
      
    </div>
  )
}

export default Sidebar;
