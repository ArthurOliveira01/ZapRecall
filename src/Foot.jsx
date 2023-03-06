import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  background-color: #FFFFFF;  
  display: flex;
  position: fixed;
  margin-top: 597px;
`;

const Finish = styled.p`
  height: 80px;
  width: 100%;
  font-family: 'Recursive';
  text-align: center;
  font-family: Recursive;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  margin-top: 24px;
`;

export default function Foot({respondidas}){
    return(
        <Footer data-test="footer">
            <Finish>{respondidas}/8 CONCLUÍDOS</Finish>
        </Footer>
    );
}