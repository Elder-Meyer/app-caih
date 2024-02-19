import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import { Wrapper, Content, Title, Desc, Mask } from '../vDetalle';
import { FaArrowLeft } from "react-icons/fa";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const DetalleRecorrido = ({recorridos}) => {

    const [datos, setDatos] = useState("");

    const params = useParams();

    useEffect(()=>{
        let d = recorridos.filter(recorrido => recorrido.id === params.id);

        setDatos(d[0].data());
        //eslint-disable-next-line 
    }, []);

  return (
    <div className='page'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/inicio" style={{textDecoration: "none", color: "inherit"}}>
          INICIO
        </Link>
        <Link to="/recorridos" style={{textDecoration: "none", color: "inherit"}}>
          RECORRIDOS
        </Link>
        <Typography color="text.primary">{datos.lugar}</Typography>
      </Breadcrumbs>
      <Wrapper>
        <Content key={datos.id}>
          <Title>
              <Link to="/recorridos">
                <FaArrowLeft/>
              </Link>

              {datos.lugar} 
          </Title>

          
          <Desc>{datos.descripcion}</Desc>

          <Mask>
            <img  alt={datos.lugar} src={datos.urlImg} />
          </Mask>
          
        </Content>
      </Wrapper>
    </div>
  )
}
