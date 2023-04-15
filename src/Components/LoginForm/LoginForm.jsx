import styles from "./LoginForm.module.css";
import api from "../../services/index";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/global-context";
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
