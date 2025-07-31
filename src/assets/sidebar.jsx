import React, { useState } from 'react'
import { FaPlus, FaRegMessage, FaRegCircleQuestion } from "react-icons/fa6";
import { AiOutlineSetting, AiOutlineMenu } from "react-icons/ai";

function Sidebar() {

  const [extended, setExtended] = useState(true)




  return (

    <>
      <div className="sidebar">
        <div className="top">
          <AiOutlineMenu onClick={() => setExtended(!extended)} className="menu" />
          {extended ? <div className="new-chat">
            <FaPlus />
            <p>New Chat</p>
          </div> : null}

          {extended ? <div className="recent">
            <p className="recent-para">Recent</p>
            <div className="recent-entry option ">
              <FaRegMessage className="message-icon" />
              <p>What is React...</p>

            </div>
            <div className="recent-entry option">
              <FaRegMessage className="message-icon" />
              <p>Whatis React...</p>

            </div>
          </div> : null}
        </div>
        <div className="bottom">
          <div className="bottom-item  option">
            <FaRegCircleQuestion className="icon" />
            {extended ? <p>help</p> : null}
          </div>

          <div className="bottom-item  option">
            <AiOutlineSetting className="icon" />
            {extended ? <p>Settings</p> : null}
          </div>

        </div>
      </div>
    </>
  )
}

export default Sidebar;
