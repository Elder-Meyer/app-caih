import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom"
import { Wrapper, Content, Title,  SubTitle, Desc, Mask } from '../vDetalle';
import { FaUserAlt, FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';


export const DetalleArticulo = ({articulos}) => {

    const [datos, setDatos] = useState("");
    
    const params = useParams();

    useEffect(() => {
        let p = articulos.filter(articulo => articulo.id === params.id);
        setDatos(p[0].data()); 
        //eslint-disable-next-line 
    }, []);    

  return (
    <div className="page">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/inicio" style={{textDecoration: "none", color: "inherit"}}>
          INICIO
        </Link>
        <Link to="/articulos" style={{textDecoration: "none", color: "inherit"}}>
          ARTICULOS
        </Link>
        <Typography color="text.primary">{datos.articulo}</Typography>
      </Breadcrumbs>
      <Wrapper>
        <Content key={datos.id}>
          
          <Title>
              <Link to="/articulos">
                <FaArrowLeft/>
              </Link>

              {datos.articulo} + {datos.id}
          </Title>

          <SubTitle>{datos.subtitulo}</SubTitle>

          <Mask>
            <img  alt={datos.articulo} src={datos.urlImg} />
          </Mask>

          <Desc>{datos.descripcion}</Desc>
          

          <strong><FaUserAlt/> {datos.autor}</strong>
          &nbsp;
          <span><FaRegCalendarAlt/> {datos.fechaSubida}</span>
        </Content>
      </Wrapper>
    </div>
  )
}
