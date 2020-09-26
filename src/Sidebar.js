import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://www.flaticon.com/svg/static/icons/svg/3048/3048122.svg" />
                <div className="sidebar__headerRight">
                    <IconButton>
                      <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                      <ChatIcon />
                    </IconButton>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
