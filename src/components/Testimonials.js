import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
// import {SeanImg} from '../assets/images/sean.jpg'
// import {TracyImg} from '../assets/images/tracy.jpg'
const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["tracy","sean"]}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `  
  )
  return (
    
      <TestimonialsContainer>
        <TopLine>
          Testimonials
        </TopLine>
        <Description>
          What people are saying
        </Description>
        <ContentWrapper>
          <ColumnOne>
             <Testimonial>
               <IoIosCheckmarkCircleOutline css={`color: #3fffa8; font-size: 3.2rem; margin-bottom: 1.6rem; `}/>
               <h3>Sean Micheals</h3>
               <p>  "The greatest experience of my life it was so much fun exploring the mountains 
                 and they made it super easy to book the trip and accomodation.
               </p>
             </Testimonial>
             <Testimonial>
               <FaRegLightbulb css={`color: #f9b19b; font-size: 3.2rem; margin-bottom: 1.6rem; `}/>
               <h3>Jane Tracy</h3>
               <p>
                 "It was so easy to set up my trip! They answered all my questions right away and gave me 
                 the best price out of all the companies I researched."
               </p>
             </Testimonial>
          </ColumnOne>
          <ColumnTwo>
            {data.allFile.edges.map((image, key) =>(
              <Images key ={key} fluid={image.node.childImageSharp.fluid}/>
            ))}
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
    
  )
}

export default Testimonials

const TestimonialsContainer = styled.section`
width: 100%;
background: #fcfcfc;
color: #000;
padding: 8rem calc((100vw - 1300px) / 2);
height: 100%;
`;
const TopLine = styled.h3`
color: #077bf1;
font-size: 1.6rem;
padding-left: 3.2rem;
margin-bottom: 1.2rem;
`;
const Description = styled.p`
text-align: start;
padding-left: 3.2rem;
margin-bottom: 4rem;
font-size: clamp(2.4rem, 5vw, 3.2rem);
font-weight: bold;

`;
const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0 3.2rem;

@media only screen and (max-width: 768px){
  grid-template-columns: 1fr;
}
`;
const ColumnOne = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;

`;
const Testimonial = styled.div`
padding-top: 1.6rem;
padding-right: 3.2rem;

h3{
  margin-bottom: 1.6rem;
  font-size: 2.4rem;
  color: red;
}
P{
  color: #3b3b3b;
}
`;
const ColumnTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 3.2rem;
grid-gap: 18px;

@media screen and (max-width: 500px){
  grid-template-columns: 1fr;
}
`;

const Images = styled(Img)`
border-radius: 10px;
height: 100%;
`;