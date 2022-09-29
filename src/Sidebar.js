import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home'
import ExplorIcon from '@material-ui/icons/Explore'
import ShotsIcon from '@material-ui/icons/ShopTwoSharp'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'

import LiberaryIcon from '@material-ui/icons/LibraryAdd'
import HistoryIcon from '@material-ui/icons/History'
import YourVideosIcon from '@material-ui/icons/VideocamSharp'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import LikesVideosIcon from '@material-ui/icons/ThumbUp'



function Sidebar() {
    return (



        <div className='sideBar'>


            <SidebarRow selected title="Home" Icon={HomeIcon} />
            <SidebarRow title="Explore" Icon={ExplorIcon} />
            <SidebarRow title="Shots" Icon={ShotsIcon} />
            <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
            <hr />

            <SidebarRow title="Liberary" Icon={LiberaryIcon} />
            <SidebarRow title="History" Icon={HistoryIcon} />
            <SidebarRow title=" Your Videos" Icon={YourVideosIcon} />
            <SidebarRow title=" Watch Later" Icon={WatchLaterIcon} />
            <SidebarRow title=" Likes Videos" Icon={LikesVideosIcon} />
        </div>



    )
}

export default Sidebar