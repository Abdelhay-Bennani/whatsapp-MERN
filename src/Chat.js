import React from 'react'
import './Chat.css';
import { Avatar } from "@material-ui/core";

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at ...</p>
                </div>
            </div> 
        </div>
    )
}

export default Chat
