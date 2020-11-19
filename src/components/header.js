import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import {BiMenu} from 'react-icons/bi'
import {MenuData} from '../data/MenuData'
import { Button } from './Button'

const header = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">EXPLORIX</NavLink>
        <MenuIcon />
        <NavMenu>
          {MenuData.map((menuItem, index) =>(
            <NavLink to={menuItem.link} key={index}>{menuItem.title}</NavLink>
          ))}
        </NavMenu>
        <NavBtn> 
          <Button primary round to='/trips'>Explore Now</Button>
        </NavBtn>
      </Nav>
      
    </div>
  )
}

export default header

const Nav = styled.nav`
background-color: transparent;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.8rem calc((100vw - 1300px) / 2);
z-index: 100;
position: relative;
`;

const NavLink = styled(Link)`
text-decoration: none;
color: #fff;
display: flex;
align-items: center;
padding: 0 1.6rem;
height: 100%;
cursor: pointer;
font-size: 2rem;
font-weight: bold;
`;

const MenuIcon = styled(BiMenu)`
display: none;
color: #fff;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 2.9rem;
  cursor: pointer;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media only screen and (max-width: 768px) {
  display: none;
}
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media only screen and (max-width: 768px) {
  display: none;
}
`;