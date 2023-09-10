import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import PATHROUTES from "./helpers/PathRoutes";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate();

  const [access, setAccesss] = useState(false);
  const EMAIL = "sbr@email.com";
  const PASSWORD = "pass123";

  const [characters, setCharacters] = useState([]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccesss(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
    /* eslint-disable */
  }, [access]);

  const onSearch = (id) => {
    if (characters.some((character) => character.id === Number(id))) {
      window.alert("¡Este personaje ya se agrego!");
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((characters) => [...characters, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id);
      })
    );
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
        <Route
          path={PATHROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={PATHROUTES.ABOUT} element={<About />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
