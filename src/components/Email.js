import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/sunset.jpg'
import { Button } from './Button'

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get access to exclusive offers</h1>
        <p>Sign up for your newsletter below to get $100 off on your first trip</p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email"/> 
            </label>
            <Button 
             as="button" 
             type="submit" primary round
             css={`
              height: 48px; 
              @media screen and (max-width: 768px){
               width: 100px;
               min-width: 350px;
              }
              @media screen and (max-width: 400px){
               min-width: 250px;
              }
             `
             }>Sign Up</Button>
          </FormWrap>
        </form>
      </EmailContent>
      
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.section`
background: linear-gradient(
  100deg, 
  rgba(0,0,0,0.5) 0%, 
  rgba(0,0,0,0.5) 35%, 
  rgba(0,0,0,0.5) 100% 
  ),
   url(${EmailBg}) no-repeat center;
   background-size: cover;
   height: 450px;
   width: 100%;
   padding: 5rem calc((100vw - 1300px) / 2);
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const EmailContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1{
  text-align: center;
  margin-bottom: 1.6rem;
  font-size: clamp(1.6rem, 5vw , 3rem);
  padding: 0 1.6rem;
}
 p{
   text-align: center;
   font-size: clamp( 1.6rem 2.5vw, 2.4rem);
   padding: 0 1.6rem;
   margin-bottom: 3.2rem
 }

 form{
   z-index: 10;
 }
`;
const FormWrap = styled.div`
input{
   padding: 1.6rem 2.4rem;
   outline: none;
   width: 350px;
   height: 48px;
   border: none;
   margin-right: 1.6rem;
   margin-bottom: 2.6rem;
   border-radius: 50px;

   @media only screen and (max-width: 768px){
     display: flex;
     flex-direction: column;
     padding: 0 1.6rem

     input{
       margin-bottom: 2rem;
       width: 100%;
       margin-right: 0;
     }
   }

 }
`;
 /* const EmailBg = styled.img``; */