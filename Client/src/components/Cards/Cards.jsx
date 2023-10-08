import PropTypes from "prop-types";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {characters.map((character) => {
        return (
          <Card
            id={character.id}
            key={character.id}
            onClose={onClose}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
          />
        );
      })}
    </div>
  );
}

Cards.propTypes = {
  onClose: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
};
