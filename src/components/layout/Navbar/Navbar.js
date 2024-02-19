//Navbar.js/
import React, {useState} from 'react';
import {    //elementos del menu, hechos como styled-components
    Container, LogoContainer, 
    Menu, MenuItem, 
    MobileIcon, Wrapper
} from './Navbar.elements';
import { //iconos usados de font awesome
    FaBars, FaTimes, FaBookOpen, FaMapMarkerAlt, FaBullhorn, FaInfoCircle, FaHome
} from "react-icons/fa";
import { IconContext } from 'react-icons'; 
import logoPrincipal from '../../../images/logos/noLettersCAIH-Baner-NoBackground.png';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false); 

  return (
    <Container>
        <Wrapper>
            <IconContext.Provider value={{style: {fontSize: "2em"}}}>
                <LogoContainer>
                    <img src={logoPrincipal} alt="LogoPrincipalCAIH"/>
                    <p>Colegio de Arquitectos e Ingenieros Civiles de la Huasteca A.C.</p>
                </LogoContainer>
                
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    { showMobileMenu ? <FaTimes/> : <FaBars/> }                    
                </MobileIcon>


                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <NavLink 
                            to="/inicio" 
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className={({isActive}) => isActive ? `${styles.active} ${styles.enlaceNav}` : `${styles.enlaceNav}`} >
                            <div>
                                <FaHome/>
                                Inicio
                            </div>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink 
                            to="/proyectos" 
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className={({isActive}) => isActive ? `${styles.active} ${styles.enlaceNav}` : `${styles.enlaceNav}`} >
                            <div>
                                <FaBookOpen/>
                                Proyectos
                            </div>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink 
                            to="/recorridos" 
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className={({isActive}) => isActive ? `${styles.active} ${styles.enlaceNav}` : `${styles.enlaceNav}`} >
                            <div>
                                <FaMapMarkerAlt/>
                                Recorridos
                            </div>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink 
                            to="/reportes" 
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className={({isActive}) => isActive ? `${styles.active} ${styles.enlaceNav}` : `${styles.enlaceNav}`} >
                            <div>
                                <FaBullhorn/>
                                Reportes    
                            </div>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink 
                            to="/acerca-de" 
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className={({isActive}) => isActive ? `${styles.active} ${styles.enlaceNav}` : `${styles.enlaceNav}`} >
                            <div>
                                <FaInfoCircle/>    
                                Sobre el CAIH
                            </div>
                        </NavLink>
                    </MenuItem>
                </Menu>
                
            </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}
