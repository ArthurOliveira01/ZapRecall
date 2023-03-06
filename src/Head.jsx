import styled from 'styled-components';
import React from 'react';
import logo from "./img/logo.png";

const Img = styled.img`
  width: 52px;
  height: 60px;
`;

const Header = styled.div`
  display:flex;
  justify-content: center;
  position: fixed;
  border-top: 44px solid;
  border-color: #FB6B6B;
  width: 100%;
  left: 50%; 
  transform: translateX(-50%); 
  background-color: #FB6B6B;
`;

const Text = styled.h1`
  font-family: Righteous;
  font-size: 36px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: -0.012em;
  text-align: center;
  color: #FFFFFF;

`;

const Box = styled.div`
  width: 203.17px;
  height: 44px;
`;

export default function Head(){
    return(
        <Header>
            <Img src={logo} alt="" />
            <Box>
              <Text>ZapRecall</Text>
            </Box>
          </Header>
    );
}