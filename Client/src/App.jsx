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

  const [access, setAccess] = useState(false);

  const [characters, setCharacters] = useState([]);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );

      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    !access && navigate("/");
    /* eslint-disable */
  }, [access]);

  const onSearch = async (id) => {
    if (characters.some((character) => character.id === id)) {
      return window.alert("¡Este personaje ya se agrego!");
    } else {
      try {
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => {
        return character.id !== id;
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
