import styled from 'styled-components';
import {colors} from '../../../colorTheme';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 35rem;
    
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    font-family: sans-serif;
`;

export const Content = styled.div`
    h2{
        text-align: center;
        font-size: 7rem;
    }

    p{
        font-size: 30px;
        font-weight: normal;
        font-style: italic;
    }

    div{
        width: 100%;
        display: flex;
        justify-content: center;

        a{
            text-decoration: none;
            font-size: 1.3rem;
            margin-top: 10px;
            color: ${colors.naranjaFuerte};
            background: transparent;
            display: inline-block;
            padding: 0;
            margin-top: 10px;
            transition: var(--transicion);

            &:hover{
                background-color: transparent;
                transform: scale(1.1, 1.1);
                color: ${colors.colorCafe};
            }
        }
    }

`;

