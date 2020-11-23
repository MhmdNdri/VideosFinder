import React from 'react'
import VideoItem from './VideoItem'
import './style/videoList.css';

const VideoList = ({ videos, onSelectVideo }) => {

    const renderItems = videos.map((item) => {
        return (<VideoItem onSelectVideo={onSelectVideo} video={item} />)
    })
    return (
        <>
            {renderItems}
        </>
    )
}

export default VideoList 
