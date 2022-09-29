import React from 'react'
import { Avatar } from '@material-ui/core'
import './ChannelRow.css'
import VerifiedIcon from '@material-ui/icons/VerifiedUser'


function ChannelRow({ image, channel ,verified , subs ,noOfVideos, description}) {
  return (
    <div className='channelrow'>
        <Avatar style={{height: '150px', width: '150px'}}
        src={image}  
        /> 
        <div className='channel__text'>
            <h2>{channel} {verified && <VerifiedIcon/>}</h2> 
            <span> suscribers {subs} , Videos {noOfVideos}</span> <br/>
            
            <p>{description}</p>

        </div>
        <div className='subsButton'>
          <input type='button' value='Subscribe' />
        </div>
        
    </div>
  )
}

export default ChannelRow