import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import video from '../assets/videos/Tavel.mp4'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroTitle>Unreal Destinations</HeroTitle>
          <HeroText>Out of this world</HeroText>
          <Button>Travel Now</Button>
        </HeroItems>
      </HeroContent>
      
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
/* background: #0c0c0c; */
display: flex;
justify-content: center;
align-items: center;
color: #fff;
height: 100vh;
padding: 0 1.6rem;
position: relative;
margin-top: -80px;
`;
const HeroBg = styled.div``;
const VideoBg = styled.video``;
const HeroContent = styled.div``;
const HeroItems = styled.div``;
const HeroTitle = styled.h1``;
const HeroText = styled.h2``;
