import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { Wrapper, Content, Title,  SubTitle, Desc, Mask } from '../vDetalle';
import { FaUserAlt, FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const DetalleProyecto = ({projects}) => {

  const [datos, setDatos] = useState("");
    
  const params = useParams();

  useEffect(() => {
      let p = projects.filter(project => project.id === params.id);
      setDatos(p[0].data()); 
      //eslint-disable-next-line 
  }, []);
  
  return (
    <div className="page">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/inicio" style={{textDecoration: "none", color: "inherit"}}>
          INICIO
        </Link>
        <Link to="/proyectos" style={{textDecoration: "none", color: "inherit"}}>
          PROYECTOS
        </Link>
        <Typography color="text.primary">{datos.titulo}</Typography>
      </Breadcrumbs>
      <Wrapper>
        <Content key={datos.id}>
          <Title>
              <Link to="/proyectos">
                <FaArrowLeft/>
              </Link>

              {datos.titulo}
          </Title>

          <SubTitle>{datos.ubicacion} - -  {datos.subtitulo}</SubTitle>
          <Desc>{datos.descripcion}</Desc>

          <Mask>
            <img  alt={datos.titulo} src={datos.urlImg} />
          </Mask>

          

          <strong><FaUserAlt/> {datos.autor}</strong>
          &nbsp;
          <span><FaRegCalendarAlt/> {datos.fechaSubida}</span>
        </Content>
      </Wrapper>
    </div>
  )
}