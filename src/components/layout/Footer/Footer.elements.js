/*Navbar.elements.js*/
import styled from 'styled-components';  //uso de styl7ed-components
import {colors} from '../../../colorTheme'




//contenedor del footer
export const Container = styled.footer`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: auto;
    background: 

    position: relative;
    z-index: 999;
    background-color: ${colors.colorGris};
`;

//envoltorio de las redes, donde están los iconos
export const ContentRedes = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

`;

//contenedor de los iconos
export const Icono = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 50px;
    height: 50px;
    margin: 30px 15px 0px;
    padding: 0;

    svg{
        fill: ${colors.naranjaClaro};
        transition: all 300ms;
    }

    &:hover{
        svg{
            fill: ${colors.colorBlanco};
            transform: scale(1.2, 1.2);
        }
    }
`;


//contenedor del texto
export const LogoText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
    height: auto;
    margin: 15px 0px;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;

    color: ${colors.colorBlanco};
`;




/*este es un comentario*/