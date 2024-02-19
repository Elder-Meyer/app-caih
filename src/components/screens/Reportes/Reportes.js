import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Form, Button} from "semantic-ui-react"
import {useFormik} from "formik"
import * as Yup from "yup"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const Reportes = () => {

  const formik = useFormik({
    initialValues:{
      name: "",
      email: "",
      password: "",
      repeatPassword: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string().email().required("El email es obligatorio"),
      password: Yup.string()
                .required("La contraseña es obligatoria")
                .matches(/[A-Z]+[0-9]/, "La contraseña debe contener minusculas, mayusculas, numeros")
                .min(8, "La contraseña debe tener mas de 8 caracteres")
                .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales"),
      repeatPassword: Yup.string()
                .required("La contraseña es obligatoria")
                .matches(/^[a-zA-Z0-9]+$/ , "La contraseña debe contener minuscula, mayuscula y numeros")
                .min(8, "La contraseña debe tener mas de 8 caracteres")
                .oneOf([Yup.ref("password")], "Las contraseñas no son iguales")
    }),

    onSubmit: (formData)=>{
      formik.handleReset()
      console.log(formData)
      alert("Datos guardados");
    }
  })

  return (
    <div className="page">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/inicio" style={{textDecoration: "none", color: "inherit"}}>
          INICIO 
        </Link>
        <Typography color="text.primary">REPORTES</Typography>
      </Breadcrumbs>

      
      <Container
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "60vh",
          border: "5px solid red"
        }}
      >
        <h2>Formulario de registro</h2>
        <Form style={{width: "70%" }} onSubmit={formik.handleSubmit}> 
          <Form.Input 
            label="Nombre:"
            type='text' 
            placeholder="nombre y apellidos" 
            name="name" 
            onChange={formik.handleChange} 
            error={formik.errors.name}
            value={formik.values.name}
            autoComplete="off"
          />
          <Form.Input
            label="Correo electronico:"
            type='text' 
            placeholder="correo electronico" 
            name="email" 
            onChange={formik.handleChange} 
            error={formik.errors.email}
            value={formik.values.email}
            autoComplete="off"
          />
          <Form.Input 
            label="Contraseña:"
            type='password' 
            placeholder="contraseña" 
            name="password" 
            onChange={formik.handleChange} 
            error={formik.errors.password}
            value={formik.values.password}
          />
          <Form.Input 
            label="Repetir contraseña:"
            type='password' 
            placeholder="Repetir contraseña" 
            name="repeatPassword" 
            onChange={formik.handleChange} 
            error={formik.errors.repeatPassword}
            value={formik.values.repeatPassword}
          />
          <Button type='submit'>Registro</Button>
          <Button type='button' onClick={formik.handleReset}>Limpiar formulario</Button>
        </Form>
      </Container>
        
    </div>
  )
}
