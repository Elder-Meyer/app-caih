import styled from 'styled-components';
import {CarouselItem} from 'reactstrap';
import {colors} from '../../../colorTheme';

/*ENVOLTORIO DE CRRUSEL*/
export const WraperCarousel = styled.div`
    display: flex;
    flex-flow: row wrap;
    
    justify-content: center;

    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
    border-bottom: 2px solid ${colors.colorGris};
    background-color: ${colors.colorGrisOpacity};
`;

/*Estilos del item del carrusel*/
export const CarouselItemStyled = styled(CarouselItem)`
    img{
        width: 1600px;
        height: 700px;
        object-fit: cover;
    }

    
`;




export const Title = styled.h1`
    background-color: ${colors.colorGrisOpacity};
    color: ${colors.colorBlanco};
    display: inline-block;
    position: absolute;
    width: 99%;
    text-align: center;
    z-index: 10;
`;


export const ContentArticles = styled.div`
    margin-top: 15px;

    a{
        font-weight: bolder;
        text-decoration: none;
        color: black;
        transition: all 0.3s;

        &:hover{
            color: ${colors.naranjaFuerte};
        }
    }
`;