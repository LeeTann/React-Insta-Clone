import React from 'react';
import instaLogo from './insta-logo.png';
import instaTitle from './insta-title.png';
import instaCompass from './insta-compass.png';
import instaHeart from './insta-heart.png';
import instaProfile from './insta-profile.png';
// import styled from 'styled-components';
import WrapperDiv from './SearchContainerStyles';
import LogoStyle from './InstagramLogoStyles';
import Image from './ImgStyles';
import Input from '../Login/InputStyles'

// const LeftHeader = styled.div`
//     padding-right: 30px;
//     border-right: 1px solid grey;
// `

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            term: ""
        }
    }

    changeHandler = event => {
        this.setState({term: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.search(this.state.term)
        this.setState({term: ""})
    }

    render() {
        return (
            <WrapperDiv>
                <LogoStyle> 
                    <Image className="insta-logo" alt="instagram logo" src={instaLogo} />
                    <hr/>
                    <Image className="insta-title" alt="instagram title" src={instaTitle} />
                </LogoStyle>      
                <div>
                    <form onSubmit={this.submitHandler}>
                        <Input
                            className="header-middle" 
                            type="text" 
                            placeholder="Search" 
                            value={this.state.term}
                            onChange={this.changeHandler}
                        />
                    </form>
                    
                </div>
                <div className="header-right">
                    <img className="insta-compass" alt="instagram compass" src={instaCompass} />
                    <img className="insta-heart" alt="instagram heart" src={instaHeart} />
                    <img className="insta-profile" alt="instagram profile" src={instaProfile} />
                </div>
            </WrapperDiv>
        )
    }

}

export default SearchBar;