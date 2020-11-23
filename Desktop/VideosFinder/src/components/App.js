import React, { useState } from 'react';
import Searchbar from './SearchBar.jsx'
import youtube from "../apis/Youtube"
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {

    const [videos, setVideos] = useState([])
    const [selectVideo, setSelectVideo] = useState(null)

    const onSearchSubmit = async (text) => {
        const response = await youtube.get('/search', {
            params: {
                q: text
            }
        });
        setVideos(response.data.items)
    }

    const onSelectVideo = (video) => {
        setSelectVideo(video)
    }
    return (
        <div>
            <Searchbar onSubmit={onSearchSubmit} />
            <VideoDetail video={selectVideo} />
            <VideoList onSelectVideo={onSelectVideo} videos={videos} />
        </div>
    );
}

export default App;