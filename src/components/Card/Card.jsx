import PropTypes from "prop-types";
import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import PATHROUTES from "../../helpers/PathRoutes";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const { pathname } = useLocation();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? dispatch(removeFav(id)) : dispatch(addFav(props));
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <img className={style.cardImg} src={image} alt="" />
      <Link to={`/detail/${id}`}>
        <h1 className={style.title}>{name}</h1>
      </Link>
      <h3 className={style.subTittle}>Status: {status}</h3>
      <h3 className={style.subTittle}>Specie: {species}</h3>
      <h3 className={style.subTittle}>Gender: {gender}</h3>
      <h3 className={style.subTittle}>Origin: {origin["name"]}</h3>

      {pathname !== PATHROUTES.FAVORITES && (
        <button
          className={style.closeButton}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  origin: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
