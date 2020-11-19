import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import video from '../assets/videos/Tavel.mp4'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={video} type='video/mp4' muted loop autoPlay playsInline/>
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroTitle>Unreal Destinations</HeroTitle>
          <HeroText>Out of this world</HeroText>
          <Button primary round big to='/trips'>Travel Now</Button>
        </HeroItems>
      </HeroContent>
      
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
height: 100vh;
padding: 0 1.6rem;
position: relative;
margin-top: -80px;

::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(
    100deg, 
    rgba(0,0,0, 0.2) 0%,
    rgba(0,0,0, 0.6) 100% ),
  linear-gradient(100deg, rgba(0,0,0, 0.2) 0%,transparent 100% );


}
`;
const HeroBg = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;
const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`;
const HeroContent = styled.div`
z-index: 3;
height: calc(100vh - 80px);
max-height: 100%;
padding: 0 calc((100vw - 1300px) / 2);
`;
const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 100vh;
max-height: 100%;
padding: 0;
color: #fff;
line-height: 1.1;
font-weight: bold;
`;
const HeroTitle = styled.h1`
font-size: clamp(2.4rem, 6vw, 7rem);
margin-bottom: 2.4rem;
letter-spacing: 3px;
padding: 0 1.6rem;
font-weight: 800;
`;
const HeroText = styled.h2`
font-size: clamp(1.6rem, 3vw, 5rem);
margin-bottom: 2rem;
font-weight: 400;
`;
