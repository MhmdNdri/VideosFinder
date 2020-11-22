import React, { useState } from 'react';
import "./SearchBar.css"


const SearchBar = ({ onSubmit }) => {

    const [text, setText] = useState("")


    const onSubmitHandler = event => {
        event.preventDefault();
        onSubmit(text)
    }

    return (
        <div className="search-box">
            Search Your Video :
            <form className="search-form" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    value={text}
                    className="search-input"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
        </div>
    );
}


export default SearchBar;