import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {

    const renderItems = videos.map((item) => {
        return (<VideoItem video={item} />)
    })
    return (
        <div>
            <h2>{renderItems}</h2>
        </div>
    )
}

export default VideoList 
