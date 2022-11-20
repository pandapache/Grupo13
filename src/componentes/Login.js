import React from "react";
import { Link } from 'react-router-dom';

const Login =() => {
    return (
    <div>
    <h1>Grupo 13</h1>
    <h2>Inicio de sesion</h2>
    <h2>Bienvenido, ingrese sus credenciales</h2>
    <input placeholder="Email"/>
    <input placeholder="Password"/>
    <button>Ingresar</button>
    <Link to={"/crear-cuenta"}>Crear cuenta</Link>
  </div>
    );
}
export default Login;