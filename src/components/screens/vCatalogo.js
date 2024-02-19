import styled, {css} from 'styled-components';
import {colors} from '../../colorTheme';

export const Section = styled.section`
    display: flex;
    flex-flow: row wrap;
    background: #ddd;
`;

export const Item = styled.article`
    flex-basis: 500px; /*tamaño del contenedor que muestra el proyecto en su*/
    flex-grow: 5;

    padding:  15px;
    margin: 50px 30px;

    border-radius: 5px;    
    border: 3px solid ${colors.naranjaClaro};
    color: ${colors.colorBlanco};
    background-color: ${colors.colorGris};
    transition: var(--transicion);

    ${props => props.chico && css`
        flex-basis: 400px;
    `}

    ${props => props.transparent && css`
        border-radius: 15px;
        box-shadow: 5px 5px 10px ${colors.colorCafe};
        background-color: #4c4c4c;
        color: #ddd;    
        transform: scale(1.02, 1.02);
    `}

    

    &:hover{
        border-radius: 15px;
        box-shadow: 5px 5px 10px ${colors.colorCafe};
        background-color: #333333;
        transform: scale(1.02, 1.02);

        ${props => props.transparent && css`
            border-radius: 0px;
            box-shadow: 0px 0px 0px transparent;
            background-color: ${colors.colorGris};
            color: ${colors.colorBlanco};
            transform: scale(1, 1);
        `}
    }

    a{
        display: inline-flex;
        background-color: #141414;
        border: 1px solid ${colors.naranjaFuerte};
        border-radius: 5px;
        color: ${colors.colorBlanco};
        cursor: pointer;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 15px;
        font-weight: 500;
        overflow: hidden;
        padding: 10px;
        position: relative;
        text-decoration: none;

        span{
            position: relative;
            z-index: 2;
        }

        &:after{
            content: "";
            width: 150%;
            height: 100%;
            position: absolute;
            z-index: 1;
            top: -1px;
            left: -150%;
            border-bottom: 50px solid ${colors.naranjaFuerte};
            border-right: 40px solid transparent;
            transition: var(--transicion2);
        }

        &:hover:after {
            left: 0;
        }
    }
    /*CUANDO CAMBIEN LAS DIMENSIONES DE LA PANTALLA*/ 
    @media screen and (max-width: 650px){
        margin: 15px 7px;
        padding-top: 0;
    }
`;

export const Titulo = styled.h3`
    display: block;
    font-weight: bold;
    font-size: 27px;
    padding-top: 15px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: ${colors.naranjaClaro};
`;

export const Subtitulo = styled.h5`
    font-size: 19px;
`;

export const Resaltado =styled.strong`
    display: block;
`;

export const Cursiva = styled.i`
    
`;

export const Mask = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    
    img{
        height: 350px;
        width: 350px;
        object-fit: scale-down;
        transform: scale(1.1, 1.1);
    }

    @media screen and (max-width: 650px){
        img{
            height: 200px;
            width: 80%;
            object-fit: cover;
        }

        &{
            margin-top: 5px;
            padding-top: 10px;
            height: auto;
            z-index: 10;
        }
    }
`;