import { useState } from "react";
import validation from "./validation";
import PropTypes from "prop-types";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    // validation({ ...userData, [property]: value }, setErrors, errors);
    setErrors(validation({ ...userData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.formulario}>
      <h1>Login</h1>
      <form>
        <div className={style.username}>
          <label htmlFor="email">e-mail: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            autoComplete="on"
          />
          <span>{errors.email}</span>
        </div>
        <div className={style.username}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <span>{errors.password}</span>
        </div>
        <button className={style.button} type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Form;
