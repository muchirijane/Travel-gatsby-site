import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explorix</h1>
          <p>We strive to create the best experiences for our customers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle> Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destination</FooterLink>
          <FooterLink to="/">Sponsorship</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle> Videos</FooterLinkTitle>
          <FooterLink to="/about">Submit Video</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influencer</FooterLink>
        </FooterLinkItems>

        <FooterLinkItems>
          <FooterLinkTitle> Social Media</FooterLinkTitle>
          <FooterLink to="/about">Instagram</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.section`
padding: 5rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: repeat(2, 1fr);
color: #000;
background: #fafafb;
`;
const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);

@media only screen and (max-width: 400px){
  grid-template-columns: 1fr;
}
`;
const FooterDesc = styled.div`
padding: 0 3.2rem;
h1{
  margin-bottom: 3rem;
  color: #f26a2c;
}

p{
  font-size: clamp(1rem, 1.3vw, 3rem);
}

@media screen and (max-width: 400px){
  padding: 1.6rem;
}
`;
const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1.6rem 3.2rem;

@media screen and (max-width: 400px){
  padding: 1.6rem;
}
`;
const FooterLinkTitle = styled.h2`
font-size: 1.6rem;
margin-bottom: 1.6rem;
`;
const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 1.2rem;
font-size: 1.4rem;
color: #3b3d4e;
transition: all .3s ease-out;

&:hover{
  color: #f26a2e;
}
`;