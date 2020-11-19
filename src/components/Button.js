import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
background: ${({primary}) => primary? '#f26a2e' : '#077bf1'};
white-space: nowrap;
padding: ${({big})=> big? '16px 40px' : '10px 32px'};
color: #fff;
font-size: ${({big})=> big? '2rem' : '1.6rem'};
border-radius: ${({round}) => round? '50px': 'none'};
outline: none;
border: none;
min-width: 10rem;
cursor: pointer;
text-decoration: none;
transition: all .2s ease;
&:hover{
  background: ${({primary}) => primary? '#077bf1' : '#f26a2e'};
  transform: translateY(-2px);
}
&:active{
  transform: translateY(2px);
}
`;