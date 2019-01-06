import React from 'react';
import instaLogo from './insta-logo.png';
import instaTitle from './insta-title.png';
import instaCompass from './insta-compass.png';
import instaHeart from './insta-heart.png';
import instaProfile from './insta-profile.png';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img className="insta-logo" alt="instagram logo" src={instaLogo} />
                <img className="insta-title" alt="instagram title" src={instaTitle} />
            </div>
            <div>
                <input className="header-middle" type="text" placeholder="Search"></input>
            </div>
            <div className="header-right">
                <img className="insta-compass" alt="instagram compass" src={instaCompass} />
                <img className="insta-heart" alt="instagram heart" src={instaHeart} />
                <img className="insta-profile" alt="instagram profile" src={instaProfile} />
            </div>
        </div>
    )
}

export default SearchBar;