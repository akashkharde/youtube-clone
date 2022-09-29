import React from 'react'
import './Search.css'
import TuneOutlineIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'


function Search() {
  return (
    <>
      <div className='searchPage'>

        <div className='Searchpage__filter'>
          <div className='filter__icon'>
            <TuneOutlineIcon />
          </div>
          <div> Filter</div>
        </div>
        <hr />

        <ChannelRow
          image='https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Sonny Sangha '
          subs='113k'
          verified
          noOfVideos='12'
          description='Bhuvan Bam is an Indian comedian, writer, singer, songwriter, and YouTube personality from Delhi, India. He is known for his comedy channel on YouTube named .'

        />
          <hr />
        <VideoRow
        image='https://cdn.pixabay.com/photo/2022/09/20/21/31/christmas-7468803__340.jpg'
        channel='Bhuvan Bam '
        views = '244M'
        timeStamp = 'Steamed 8 days ago'
       description='Bhuvan Bam is an Indian comedian, writer, singer, songwriter, and YouTube personality from Delhi, India. He is known for his comedy channel on YouTube named .'
        />

<VideoRow
        image='https://cdn.pixabay.com/photo/2022/09/20/21/31/christmas-7468803__340.jpg'
        channel='Bhuvan Bam '
        views = '244M'
        timeStamp = 'Steamed 8 days ago'
       description='Bhuvan Bam is an Indian comedian, writer, singer, songwriter, and YouTube personality from Delhi, India. He is known for his comedy channel on YouTube named .'
        />

<VideoRow
        image='https://cdn.pixabay.com/photo/2022/09/20/21/31/christmas-7468803__340.jpg'
        channel='Bhuvan Bam '
        views = '244M'
        timeStamp = 'Steamed 8 days ago'
       description='Bhuvan Bam is an Indian comedian, writer, singer, songwriter, and YouTube personality from Delhi, India. He is known for his comedy channel on YouTube named .'
        />

<VideoRow
        image='https://cdn.pixabay.com/photo/2022/09/20/21/31/christmas-7468803__340.jpg'
        channel='Bhuvan Bam '
        views = '244M'
        timeStamp = 'Steamed 8 days ago'
       description='Bhuvan Bam is an Indian comedian, writer, singer, songwriter, and YouTube personality from Delhi, India. He is known for his comedy channel on YouTube named .'
        />

<VideoRow
        image='https://cdn.pixabay.com/photo/2022/09/20/21/31/christmas-7468803__340.jpg'
        channel='Bhuvan Bam '
        views = '244M'
        timeStamp = 'Steamed 8 days ago'
       description='Bhuvan Bam is an Indian comedian, writer, singer, songwriter, and YouTube personality from Delhi, India. He is known for his comedy channel on YouTube named .'
        />

<VideoRow
        image='https://cdn.pixabay.com/photo/2022/09/20/21/31/christmas-7468803__340.jpg'
        channel='Bhuvan Bam '
        views = '244M'
        timeStamp = 'Steamed 8 days ago'
       description='Bhuvan Bam is an Indian comedian, writer, singer, songwriter, and YouTube personality from Delhi, India. He is known for his comedy channel on YouTube named .'
        />
      </div>


    </>

  )
}

export default Search