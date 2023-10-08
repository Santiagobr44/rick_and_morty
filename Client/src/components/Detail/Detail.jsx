import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character ? (
        <div>
          <img src={character?.image} alt="" />
          <h1>Name: {character?.name}</h1>
          <h2>Status: {character?.status}</h2>
          <h2>Specie: {character?.species}</h2>
          <h2>Gender: {character?.gender}</h2>
          <h2>Origin: {character.origin?.name}</h2>
        </div>
      ) : (
        <div className={style.loader}></div>
      )}
    </div>
  );
};

export default Detail;
