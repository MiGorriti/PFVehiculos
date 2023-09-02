import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router
import styles from "./Home.module.css";
import Cards from "../../Cards/Cards";
import { getCars } from "../../../redux/action/action";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../NavBar/Navbar";

export default function Home() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <div className={styles.background}>
        <h1 className={styles.AppTitle}>IGNITE MOTORS</h1>
        {/* Utiliza Link para crear el enlace */}
        <Link to="/Home/form">Form</Link>
        <Cards></Cards>
      </div>
      <h2 className={styles.SubTitle}>Todas Las Categorias</h2>
      <div className={styles.enlaces}>
        <Link to="/">Prueba</Link>
      </div>

      <div></div>
      {/* <Footer /> */}
    </div>
  );
}

