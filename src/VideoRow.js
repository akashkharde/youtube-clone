import React from 'react'
import './VideoRow.css'

function VideoRow( {image,channel, views, timeStamp ,description}) {
  return (
    <div className='videorow'>
        <img src={image} alt = ' ' />
        <div className='videorow__text'>
            <p>{channel}</p>
            <span>{views} . {timeStamp}</span> <br/>
            <span>{description}</span>
        </div>
    </div>
  )
}

export default VideoRow