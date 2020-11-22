import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import {Button} from './Button'
import {ImLocation} from 'react-icons/im'

const Trips = ({heading}) => {
  const data = useStaticQuery (graphql `
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  
  `)

  function getTrips (data){
    const tripsArray = []
    data.allTripsJson.edges.forEach((trip, index) =>{
        tripsArray.push(
          <ProductCard key={index}>
            <ProductImg 
              // src={trip.node.img.childImageSharp.fluid.src}
              alt={trip.node.alt}
              fluid={trip.node.img.childImageSharp.fluid}
            />
            <ProductInfo>
              <TextWrap>
                <ImLocation/>
                <ProductTitle>{trip.node.name}</ProductTitle>
              </TextWrap>
              <Button 
              to="/trips"
              primary="true" 
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
                `}
              >
                {trip.node.button}</Button>
            </ProductInfo>

          </ProductCard>
        )
    })

    return tripsArray
  }
  return (
    <ProductsContainer>
      <ProductsHeading> {heading} </ProductsHeading>
        <ProductWrapper> {getTrips(data)} </ProductWrapper>
    </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.section`
min-height: 100vh;
padding: 5rem calc((100vw - 1300px)/ 2);
color: #fff;
`;
const ProductsHeading = styled.h2`
font-size: clamp(2.4rem, 6vw, 7rem);
text-align: center;
margin-bottom: 5rem;
color: #000;
`;
const ProductWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
justify-items: center;
padding: 0 2rem;

@media only screen and (max-width: 1200px){
  grid-template-columns: 1fr 1fr;
}
@media only screen and (max-width: 860px){
  grid-template-columns: 1fr;
}
`;

const ProductCard = styled.div`
width: 100%;
height: 500px;
line-height: 2;
border-radius: 10px;
position: relative;
transition: 0.2s ease;
`;

const ProductImg = styled(Img)`
overflow: hidden;
height: 100%;
max-width: 100%;
position: relative;
border-radius: 10px;
filter: brightness(60%);
transition: filter .5s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover{
  filter: brightness(100%);
}
`;
const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;

@media only screen and (max-width: 200px){
  padding: 0 2rem;
}

`;
const TextWrap = styled.div`
display: flex;
align-items: center;
position: absolute;
top: 375px;
`;
const ProductTitle = styled.h3`
font-weight: 800;
font-size: 2rem;
margin-left: 0.8rem;
`;
