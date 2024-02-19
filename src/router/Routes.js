import { Section } from './StyledC';
import React, { useState, useEffect }from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer/Footer';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { Acceso } from '../components/screens/Acceso/Acceso';
import { AcercaDe } from '../components/screens/AcercaDe/AcercaDe';
import { DetalleArticulo } from '../components/screens/Articulos/DetalleArticulo';
import { Articulos } from '../components/screens/Articulos/Articulos';
import { Error } from '../components/screens/Error/Error';
import { Inicio } from '../components/screens/Inicio/Inicio';
import { DetalleProyecto } from '../components/screens/Proyectos/DetalleProyecto';
import { Proyectos } from '../components/screens/Proyectos/Proyectos';
import { DetalleRecorrido } from '../components/screens/Recorridos/DetalleRecorrido';
import { Recorridos } from '../components/screens/Recorridos/Recorridos';
import { Registro } from '../components/screens/Registro/Registro';
import { Reportes } from '../components/screens/Reportes/Reportes';

/*componentes dle administrados*/ 
import { PanelControl } from '../components/Admin/PanelControl';
import { PanelInicio } from '../components/Admin/PanelInicio';
import { AdminArticulos } from '../components/Admin/AdminArticulos';
import { AdminProyectos } from '../components/Admin/AdminProyectos';
import { AdminRecorridos } from '../components/Admin/AdminRecorridos';

//fucniones para el crud
import { getProjects } from "../App/fnProyectos";
import { getRecorridos } from "../App/fnRecorridos";
import { getArticulos } from "../App/fnArtculos";


import CheckConnection from '../components/screens/CheckConnection';


export const MyRoutes = () => {
  const [projects, setProjects] = useState(null);     //estados para almacenar la info de las diferentes colecciones
  const [recorridos, setRecorridos] = useState(null);
  const [articulos, setArticulos] = useState(null);

  const getProjectsData = async() => {                //obtenemos los datos en general para poder mandarlos a otros componentes
    const p = await getProjects();
    setProjects(p.docs);
  }

  const getRecorridosData = async() =>{
    const p = await getRecorridos();
    setRecorridos(p.docs);
  }

  const getArticulosData = async() =>{
    const p = await getArticulos();
    setArticulos(p.docs);
  }

  useEffect(()=>{                                     //ejecuta la funcion al inicio para obtener los datos
    getProjectsData();
    getRecorridosData();
    getArticulosData();
    console.log("elder");
    console.log(articulos);
  }, []);


  return (
    <BrowserRouter>
        {/**HEADER Y NAVEGACION*/}
        <Navbar/>

        {/**CONTENIDO CENTRAL */}
        <Section>
          <CheckConnection>
            <Routes>
                <Route path="/"                     element={<Navigate to="/inicio" />} />
                <Route path="/inicio"               element={<Inicio           articulos={articulos} />} />

                <Route path='/articulos'            element={<Articulos         articulos={articulos} />} />
                <Route path='/articulos/:id'        element={<DetalleArticulo   articulos={articulos} />} />

                <Route path="/proyectos"            element={<Proyectos        projects={projects}/>} />
                <Route path="/proyectos/:id"        element={<DetalleProyecto  projects={projects}/> } />

                <Route path="/recorridos"           element={<Recorridos       recorridos={recorridos}/>} />
                <Route path='/recorridos/:id'       element={<DetalleRecorrido recorridos={recorridos} />} />

                <Route path="/reportes"             element={<Reportes/>} />
                <Route path="/acerca-de"            element={<AcercaDe/>} />


                {/*Aqui vienen las subrutas*/}
                <Route path="/admin/*" element={<PanelControl />}>
                    <Route index element={<PanelInicio/>} />
                    <Route path="inicio"      element={<PanelInicio />} />
                    <Route path="articulos"   element={<AdminArticulos  articulos={articulos}   setArticulos={setArticulos}   getArticulosData={getArticulosData} />} />
                    <Route path="proyectos"   element={<AdminProyectos  projects={projects}     setProjects={setProjects}     getProjectsData={getProjectsData} />} />
                    <Route path="recorridos"  element={<AdminRecorridos recorridos={recorridos} setRecorridos={setRecorridos} getRecorridosData={getRecorridosData} />} />
                    <Route path="*"           element={<Error/>} />
                </Route>


                <Route path="/registro" element={<Registro/>} />
                <Route path="/acceso"   element={<Acceso/>} />

                <Route path="*" element={<Error/>} />
            </Routes>
          </CheckConnection>
        </Section>

             <Link to="/admin">:)</Link>
        
        {/**PIE DE PÁGINA */}
        <Footer/>

    </BrowserRouter>
  )
}
