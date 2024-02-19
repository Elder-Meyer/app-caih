import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Mask, Item, Section, Titulo, Resaltado, Cursiva, Subtitulo} from '../vCatalogo';
import { FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Box,  Stack, InputLabel, MenuItem, FormControl  } from '@mui/material';
import Select from '@mui/material/Select';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

// DISEÑOS DEL BUSCADOR
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})); //FIN DE DISEÑO DE BUSCADOR


export const ListadoProyectos = ({projects}) => {

  const [country, setCountry] = useState('');

  const obtenerPais = (e) => {
    setCountry(e.target.value);
    filtrarPais(e.target.value.toUpperCase());
    console.log(e.target.value);
  };

  const filtrarPais = (pais)=>{
    var resultadoBusqueda = tablaProyectos.filter((elemento)=>{
      if(elemento.data().ubicacion.includes(pais)){
        return elemento;
      }
    });
    setProyectos(resultadoBusqueda);
  }

  // PARA LA BUSQUEDA NORMAL
  const [proyectos, setProyectos] = useState([]);
  const [tablaProyectos, setTablaProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value.toUpperCase());
    console.log(e.target.value);
  }

  const filtrar = (terminoBusqueda)=>{
    var resultadoBusqueda = tablaProyectos.filter((elemento)=>{
      if(elemento.data().titulo.includes(terminoBusqueda)){
        return elemento;
      }
    });
    setProyectos(resultadoBusqueda);
  }

  useEffect(() => {
    setProyectos(projects);
    setTablaProyectos(projects);
  }, [])
  

  return (
    <Box sx={{ display: "flex", flexFlow: "column wrap", background: "#ddd", padding: "15px" }}>      

      {/* CONTENEDOR DE BUSQUEDA */}
      <Stack spacing={2} sx={{ width: 300 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar…"
            inputProps={{ 'aria-label': 'search' }}
            value={busqueda}
            onChange={handleChange}
          />
        </Search>

        {/* BUSQUEDA AVANZADA FILRO 1 */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Pais</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Age"
            onChange={obtenerPais}
          >
            <MenuItem value={"MEXICO"}>Mexico</MenuItem>
            <MenuItem value={"ESTADOS UNIDOS"}>Estados unidos</MenuItem>
            <MenuItem value={"ARGENTINA"}>Argentina</MenuItem>
            <MenuItem value={"CHILE"}>Chile</MenuItem>
            <MenuItem value={"UGANDA"}>Uganda</MenuItem>
            <MenuItem value={"INDIA"}>India</MenuItem>
          </Select>
        </FormControl>

        {/* PRIMER DISEÑO DE BUSQUEDA */}
        {/* <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={projects.map((option) => option.data().titulo)}
          renderInput={
            (params) => <TextField {...params} 
              label="Buscar" 
              value={busqueda}
              onChange={handleChange} 
            />}
        /> */}
        {/* FIN DE PRIMER DISEÑO DE BUSQUEDA */}
      </Stack>
      
      <Section>
        {
          proyectos ? (proyectos.map(proyecto =>{
            return(
              <Item key={proyecto.id}>
                <Titulo>{proyecto.data().titulo}</Titulo>
                <Subtitulo>{proyecto.data().subtitulo}</Subtitulo>
                <Resaltado><FaUserAlt/> {proyecto.data().autor}</Resaltado>
                <Cursiva><FaRegCalendarAlt/> {proyecto.data().fechaSubida}</Cursiva>
                <Mask>
                  <img src={proyecto.data().urlImg} alt={proyecto.data().titulo} />  
                </Mask>
                <Link to={`/proyectos/${proyecto.id}`}><span>Ver más</span></Link>
              </Item>
            )
          }))
          :
          (<h1>Cargando datos...</h1>)
        }
      </Section>      
    </Box>
  )
}
