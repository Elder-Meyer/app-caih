import styled from "styled-components";
import { MapContainer, Popup} from 'react-leaflet'
import {colors} from '../../../colorTheme'


export const Content = styled.div`
    padding-top: 10px;;

    width: 100%;
    height: 80vh;
    

    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    
`;


export const ContenedorMapa = styled(MapContainer)`
    width: 90%;
    height: 560px;
    margin: 10px 0;

    box-shadow: 0px 0px 10px ${colors.colorGris};
    border-radius: 7px;
    

    @media screen and (max-width: 1200px){
        &{
            width: 95%;
            
            margin: 7px 0;
        }
    }

    @media screen and (max-width: 1100px){
        &{
            width: 98%;

            margin: 4px 0;
        }
    }

    @media screen and (max-width: 560px){
        &{
            width: 98%;

            margin: 4px 0;
            height: 560;
        }
    }

    @media screen and (max-width: 460px){
        &{
            width: 98%;

            margin: 4px 0;
            height: 460px;
        }
    }
`;


/*ESTILOS DE LOS MARCADORES*/
export const WindowEmer = styled(Popup)`

    strong{
        display: inline-block;
        width: 100%;
        
    }

    img{
        display: inline-block;
        width: 100%;
        
    }

    div.info{
        display: inline-block;
        width: 100%;
        
    }

    @media screen and (max-width: 1080px){
        width: 300px;
        height: 200px;

        img{
            width: 200px;
            height: 100px;
            object-fit: fill;
        }

        div.info{
            font-size: 15px;
            width: 100%;
            
        }
    }

    @media screen and (max-width: 500px){
        width: 200px;
        height: 150px;

        img{
            width: 200px;
            height: 80px;
            object-fit: contain;
        }

        div.info{
            display: none;
        }
    }
`;