// import styles from "./Form.module.css";
// import { useState, useContext } from "react";
// import { AuthContext } from "../context/global-context";
// import { useNavigate } from 'react-router-dom';
// import api from "../services";


// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const {saveToken} = useContext(AuthContext);

//   async function handleSubmit(e) {
//     console.log("entrou");
//     //Nesse handlesubmit você deverá usar o preventDefault,
//     //enviar os dados do formulário e enviá-los no corpo da requisição 
//     //para a rota da api que faz o login /auth
//     //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
//     //no localstorage para ser usado em chamadas futuras
//     //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
//     //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
//     e.preventDefault();
//     try {
//         const response = await api.post("/auth", {
//             username,
//             password,
//         });
//         // console.log(response.data.name, response.data.token);
//         saveToken(response.data.token);
//         navigate('/home');
//         console.log("no try");
//     } catch (error) {
//         console.log(error);
//         console.log("no catch");
//     }
//   };

//   return (
//     <>
//       {/* //Na linha seguinte deverá ser feito um teste se a aplicação
//         // está em dark mode e deverá utilizar o css correto */}
//       <div
//         className={`text-center card container ${styles.card}`}
//       >
//         <div className={`card-body ${styles.CardBody}`}>
//           <form onSubmit={handleSubmit}>
//             <input
//               className={`form-control ${styles.inputSpacing}`}
//               placeholder="Login"
//               name="login"
//               onChange={(event) => setUsername(event.target.value)}
//               required
//             />
//             <input
//               className={`form-control ${styles.inputSpacing}`}
//               placeholder="Password"
//               name="password"
//               type="password"
//               onChange={(event) => setPassword(event.target.value)}
//               required
//             />
//             <input type="submit" />
//             {/* <button className="btn btn-primary" onClick={handleSubmit} >
//               Send
//             </button> */}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginForm;


import styles from "./Form.module.css";
import api from "../services/index";
import { useContext, useState } from "react";
import { AuthContext } from "../context/global-context";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {saveUser, saveToken} = useContext(AuthContext)
  
  async function handleSubmit (e) {

        e.preventDefault();
        try {
            const response = await api.post('/auth', {
                username,
                password,
            });
            saveUser(response.data.username);
            saveToken(response.data.token);
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required 
              value={username} 
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;


