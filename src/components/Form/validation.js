/* eslint-disable */
const validator = (inputs) => {
  const errors = {};

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

  const regexPassword = /^(?=.*[A-Za-z])[A-Za-z\d]{6,10}$/;

  const regexNumber = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;

  if (!inputs.email) {
    errors.email = "Ingresa un e-mail";
  } else if (inputs.email.length > 35) {
    errors.email = "El e-mail no debe contener mas 35 caracteres";
  } else {
    if (regexEmail.test(inputs.email)) {
      errors.email = "";
    } else {
      errors.email = "Ingresa un e-mail valido";
    }
  }

  if (!inputs.password) {
    errors.password = "Ingresa una contrasena";
  } else if (!regexPassword.test(inputs.password)) {
    errors.password = "La contrasena debe tener entre 6 - 10 caracteres";
  } else {
    if (regexNumber.test(inputs.password)) {
      errors.password = "";
    } else {
      errors.password = "La contrasena debe tener un numero";
    }
  }

  return errors;
};

export default validator;

// const validation = (userData, setErrors, errors) => {
//   let newErrors = {};

//   if (!userData.email) {
//     newErrors = { ...newErrors, email: "e-mail vacío" };
//   } else if (userData.email.length > 35) {
//     newErrors = {
//       ...newErrors,
//       email: "El e-mail no puede tener más de 35 caracteres",
//     };
//   } else {
//     if (
//       /* eslint-disable */
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)
//     ) {
//       newErrors = { ...newErrors, email: "" };
//     } else {
//       newErrors = { ...newErrors, email: "e-mail inválido" };
//     }
//   }

//   if (!userData.password) {
//     newErrors = { ...newErrors, password: "Password vacía" };
//   } else if (userData.password.length < 6 || userData.password.length > 10) {
//     newErrors = {
//       ...newErrors,
//       password: "La contraseña debe tener entre 6 y 10 caracteres",
//     };
//   } else {
//     if (
//       typeof userData.password === "string" &&
//       userData.password.match(/\d+/)
//     ) {
//       newErrors = {
//         ...newErrors,
//         password: "",
//       };
//     } else {
//       newErrors = {
//         ...newErrors,
//         password: "La contraseña debe contener al menos un número",
//       };
//     }
//   }

//   // Actualiza los errores solo si hay cambios
//   if (Object.keys(newErrors).length > 0) {
//     setErrors({ ...errors, ...newErrors });
//   } else {
//     setErrors({ ...errors, email: "", password: "" });
//   }
// };

// export default validation;
