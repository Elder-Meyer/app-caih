import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavAdmin = () => {
  return (
    <nav className="p-3 text-bg-dark">
    <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
            <NavLink 
                to="/admin/inicio"
                className={({isActive}) => isActive ? "nav-link px-2 text-warning" : "nav-link px-2 text-secondary"} 
            >Inicio</NavLink>
        </li>
        <li>
            <NavLink 
                to="/admin/articulos"
                className={({isActive}) => isActive ? "nav-link px-2 text-warning" : "nav-link px-2 text-secondary"} 
            >Articulos</NavLink>
        </li>
        <li>
            <NavLink 
                    to="/admin/proyectos"
                    className={({isActive}) => isActive ? "nav-link px-2 text-warning" : "nav-link px-2 text-secondary"} 
                >Proyectos</NavLink>
            </li>
        <li>
            <NavLink 
                to="/admin/recorridos"
                className={({isActive}) => isActive ? "nav-link px-2 text-warning" : "nav-link px-2 text-secondary"} 
            >Recorridos</NavLink>
        </li>
        </ul>
    </div>
    </div>
</nav>
  )
}
