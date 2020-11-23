import React from 'react'
import "./style/videoList.css"

const VideoItem = ({ video, onSelectVideo }) => {
    return (
        <div onClick={() => onSelectVideo(video)} className="video-list">
            <img src={video.snippet.thumbnails.medium.url} className="video-list-img" />
            <h2 className="video-list-title">{video.snippet.title}</h2>
        </div>
    )
}

export default VideoItem
