import React from 'react'
import "./style/videoList.css"

const VideoDetail = ({ video }) => {


    if (!video) {
        return <div></div>
    }
    const videoId = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="video-youtube">
                <iframe src={videoId} />
            </div>
            <div className="video-details">
                <h3 className="video-detail-title">{video.snippet.title}</h3>
                <p className="video-detail-title">{video.snippet.description}</p>
            </div>

        </div>
    )

}


export default VideoDetail
