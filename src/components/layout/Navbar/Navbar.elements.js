/*Navbar.elements.js*/
import styled from 'styled-components';  //uso de styled-components
import {Link} from 'react-router-dom';
import {colors} from '../../../colorTheme';



//contenedor del menu == div y sus propiedades 
export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${colors.colorGris};
    position: fixed;
    z-index: 9999;
    border-bottom: 3px solid ${colors.naranjaClaro};
`;


//envoltura del header que esta dentro del div contenedor (osea el header)
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1500px; //este valor ajusta los espacios (bordes entre el div container y el envoltorio)
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

//contenedor del logo esta en la esquina superior izquierda
export const LogoContainer = styled.div`
    margin-left: 0.1rem;
    display: flex;
    align-items: center;
    user-select: none;
    

    /* p{  
        padding-left: 0.7rem;
        font-size: 1rem;
        font-weight: 500;
        color: ${colors.colorBlanco};
        width: 300px;
    } */

    p{
        color: ${colors.colorBlanco};
        font-size: 0.78rem;
        position: relative;
        font-family: Arial, Helvetica, sans-serif;
        width: 250px;
        font-weight: bolder;
        margin: 0 0 0 5px;
        padding: 0;
    }

    img{
        position: relative;
        height: 70px;
        margin-left: -8px;
        padding-left: 0px;
    }

    @media screen and (max-width: 500px){
        p{
            display: none;
        }
    }
`;

//estilo de la lista ordenqada que forma el menu dentro del navbar
export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;

    //cuando la resolucion cambia (menor de 96opx cambia el diseño del menu)
    //cambia el estilo de la lista que forma el menu
    @media screen and (max-width: 1080px){
        background-color: ${colors.colorGris};
        position: absolute;
        top: 70px;
        left: ${({open}) => (open ? "0" : "-100%")}; //important
        width: 100%;
        height: 91.1vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`;

//items de la lista (desordenada)  
export const MenuItem = styled.li`
    height: 100%;

    //cuando la resolucion cambia se reordenan los elementos
    @media screen and (max-width: 1080px){
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

//estilo de los enlaces renombrados como MenuItemLink
export const MenuItemLink = styled(Link)`
    user-select: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 0.85rem; //estas medidas se pueden cambiar para cuando se agregen mas items al nav
    color: ${colors.naranjaClaro};
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    &.activo{
        background-color: red;
    }

    &.espera{
        background-color: blue;
    }

    //cuando se pasa el mouse por encima del link (enlace)
    &:hover{
        color: ${colors.colorBlanco};
        background-color: ${colors.naranjaFuerte};
        transition: 0.5s all ease;

        div{
            svg{
                fill: ${colors.colorGris};
            }
        }
    }

    //dimensiones del div dentro de la etiqueta menuItemLink
    //esta etiqueta tiene un logo svg y el texto que forman el elemento item del navbar
    div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        svg{
            display: none;
            fill: ${colors.naranjaClaro};
            margin-right: 0.5rem;
        }
    }

    //para que el menu (items => texto e iconos)se adapten a multiples resoluciones se lleva el siguiente orden

    //menor resolucion => crece el tamaño del div
    @media screen and (max-width: 1080px){
        width: 100%;

        div{
            width: 20%;
            justify-content: left;

            svg{
                display: flex;
            }
        }
    }

    //otra vez...
    //menor resolucion => crece el tamaño del div
    @media screen and (max-width: 880px){
        div{
            width: 40%;
            justify-content: left;

            svg{
                display: flex;
            }
        }
    }

    //una vez mas...
    //menor resolucion => crece el tamaño del div
    @media screen and (max-width: 500px){
        div{
            width: 60%;
            justify-content: left;

            svg{
                display: flex;
            }
        }
    }

    //y una ultima vez...
    //menor resolucion => crece el tamaño del div
    @media screen and (max-width: 280px){
        div{
            width: 70%;
            justify-content: left;

            svg{
                display: flex;
            }
        }
    }
`;


//estilo del icono de barras laterales
//por defecto en una resolucion de computadora no aparece
export const MobileIcon = styled.div`
    display: none;

    //cuiando la resolucion es menor el logo de "las barras" aparece
    @media screen and (max-width: 1080px) {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg{
            fill: ${colors.naranjaClaro};
            margin-right: 0.5rem;
        }
    }
`;