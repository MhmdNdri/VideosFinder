import React, { useState } from 'react';
import Searchbar from './SearchBar'
import youtube from "../apis/Youtube"
import VideoList from './VideoList';

const App = () => {

    const [videos, setVideos] = useState([])

    const onSearchSubmit = async (text) => {
        const response = await youtube.get('/search', {
            params: {
                q: text
            }
        });
        console.log(response)
        setVideos(response.data.items)
    }

    return (
        <div>
            <Searchbar onSubmit={onSearchSubmit} />
            <VideoList videos={videos} />
        </div>
    );
}

export default App;