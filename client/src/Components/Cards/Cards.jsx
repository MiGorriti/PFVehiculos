
=======
import { useSelector } from "react-redux";
import Card from "./Card/Card";
import "./styles.css";
import Page from "../Views/Paginado/Page";
import { useEffect, useState } from "react";

const CardsContainer = ({ currentPage }) => {
  const cars = useSelector((state) => state.cars);
  const [cardsPerPage, setCardsPerPage] = useState(12);
 
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const searchResults = useSelector((state) => state.onSearch);
  let displayedCars =
    searchResults && searchResults.length > 0 ? searchResults : cars;

  const carsToRender = displayedCars.slice(firstIndex, lastIndex);
  console.log(firstIndex);
  useEffect(() => {
    if (searchResults.length === 0) {

    }
  }, [searchResults]);

  return (
    <div>
      <div className="cards">
        {carsToRender?.map((car) => (
          <Card key={car.id} id={car.id} image={car.image} name={car.name} />
        ))}
      </div>
      <div>

      </div>
    </div>
  );
};

export default CardsContainer;

