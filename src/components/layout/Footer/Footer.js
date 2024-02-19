/*Footer.js*/
//importaciones

import React from 'react';
import {    //elementos del footer, hechos como styled-components
    Container, 
    LogoText,
    Icono,
    ContentRedes
} from './Footer.elements';
import { //iconos usados de font awesome
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram
} from "react-icons/fa";
import { IconContext } from 'react-icons'; 



//el elemento comienza aqui =>...
export const Footer = () => {

    /*Todo esto es el footer*/
  return (
    //contenedor del footer
    <Container>
        <IconContext.Provider value={{style: {fontSize: "2em"}}}>
            <ContentRedes>
                <Icono>
                    <a  href="https://facebook.com" rel="noreferrer" target="_blank">
                        <FaFacebookF />
                    </a>
                </Icono>
                <Icono>
                    <a  href="https://twitter.com" rel="noreferrer" target="_blank">
                        <FaTwitter/>
                    </a>
                </Icono>
                <Icono>
                    <a  href="https://google.com" rel="noreferrer" target="_blank">
                        <FaGooglePlusG/>
                    </a>
                </Icono>
                <Icono>
                    <a  href="https://instagram.com" rel="noreferrer" target="_blank">
                        <FaInstagram/>
                    </a>
                </Icono>
            </ContentRedes>
        </IconContext.Provider>

        <LogoText>Copyright &copy; CAIH 2022</LogoText>
        
    </Container>
  )
}
//...el footer termina aqui