import styled from 'styled-components';
import {colors} from '../../colorTheme';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 15px 0;
`;

export const Content = styled.div`
    width: 100%;
    min-height: 500px;
    background-color: #ddd;
    border-radius: 7px;

    margin: 15px 10px;
    padding: 10px;
    box-shadow: 3px 3px 2px ${colors.colorCafe};
`;

export const Title = styled.h2`
    color: ${colors.naranjaFuerte};
    font-size: 50px;
    font-weight: bolder;
    text-shadow: 1px 1px 1px black;
    position: relative;

    a{
        display: block;

        svg{
            color: ${colors.colorGris};
            margin: -7px 3px 0px 0px;
            transform: rotate(0deg) scale(0.8, 0.8);
            transition: all 0.5s;

            &:hover{
                color: ${colors.naranjaClaro};
                padding: 10px;
                border-radius: 100%;
                background-color: ${colors.colorGris};
                transform: rotate(360deg) scale(1, 1);
            }
        }
    }


    @media screen and (max-width: 500px){
        &{
            font-size: 40px;
        }
    }

    @media screen and (max-width: 300px){
        &{
            font-size: 30px;
        }
    }
`;

export const SubTitle = styled.i`
    font-size: 25px;
`;

export const Desc = styled.p`
    font-size: 20px;
`;

export const Mask = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    object-fit: fill;

    


    img{
        border: 1px solid ${colors.colorGris};
        border-radius: 7px;
        width: 50%;
        object-fit: cover;
        width: 60%;

        
    }


    @media screen and (max-width: 750px){
        img{
            width: 98%;
        }
    }
`;