import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";
import "./styles.css";

const CardsContainer = ({ currentPage }) => {
  const cars = useSelector((state) => state.cars);
  const [cardsPerPage] = useState(12);

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  // Si hay menos de 12 tarjetas, se mostrarán todas en una página.
  const displayedCars =
    cars.length <= cardsPerPage ? cars : cars.slice(firstIndex, lastIndex);

  return (
    <div className="cards">
      {displayedCars?.map((car) => (
        <Card key={car.id} id={car.id} image={car.image} name={car.name} />
      ))}
    </div>
  );
};

export default CardsContainer;
