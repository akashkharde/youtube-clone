import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import './videocard.css'

function VideoCard({ channel, views, timestamp, image, title, channelImage }) {
    return (
        <div className='videocard'>

            <img className='videocard__thumbnail' src={image} alt='' />

            <div className='videocard__info'>
                <Avatar
                    className='videocard__avtar'
                    alt={channel}
                    src={channelImage}
                />
                <div className='videocard__text'>
                    <span style={{fontWeight: 'bold' , fontSize: '15px'}}>{title}</span> <br/> 
                    <span>{channel}</span> <br/>
                    <span>{views}.  {timestamp}</span>

                </div>
            </div>

        </div>

    )
}

export default VideoCard