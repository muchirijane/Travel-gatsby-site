import React from 'react'
import styled from 'styled-components'
import {StatsData} from '../data/StatsData'

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why choose us</Heading>
      <Wrapper>
        {StatsData.map((stat, index) =>{
          return(
            <StatsBox key ={index}>
              <Icon>{stat.icon}</Icon>
              <Title>{stat.title}</Title>
              <Desc>{stat.desc}</Desc>
            </StatsBox>
          )
          })}
      </Wrapper>
      
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.section`
width: 100%;
background: #fff;
color: #000;
display: flex;
flex-direction:column;
justify-content: center;
padding: 4rem calc((100vw - 1300px) / 2);
`;
const Heading = styled.h1`
text-align: start;
font-size: clamp(2rem 5vw 3.2rem);
margin-bottom: 3rem;
padding: 0 2rem;
`;
const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 18px;

@media only screen and (max-width: 768px){
  grid-template-columns: 1fr 1fr;
}
@media only screen and (max-width: 500px){
  grid-template-columns: 1fr;
}
`;

const StatsBox = styled.div`
height: 100%;
width: 100%;
padding: 3.2rem;
`;
const Icon = styled.div`
font-size: 4.8rem;
margin-bottom: 1.6rem;
`;
const Title = styled.h3`
font-size: clamp(1.6rem 2.5vw, 1.5rem);
margin-bottom: 0.5rem;
`;
const Desc = styled.p`

`;