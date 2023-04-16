import styles from "./Card.module.css";
import { useContext, useEffect, useState } from "react";
import api from "../../services";
import { AuthContext } from "../../context/global-context";
import { Link } from "react-router-dom";

const Card = () => {
    const [dentistas, setDentistas] = useState([]);
    const { theme } = useContext(AuthContext)

    async function getDentistas() {
        try {
            const response = await api.get('/dentista');
            setDentistas(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDentistas();
    }, []);

    return (
        <>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            {dentistas.map(dentista => (
                <div className={`card ${theme === 'light' ? styles.card : styles.cardDark}`} key={dentista.matricula}>
                    <img
                        className="card-img-top"
                        src="/images/doctor.jpg"
                        alt="doctor placeholder"
                    />
                    <div className={`card-body ${styles.CardBody}`}>
                        {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}

            <Link to={`/detail/${dentista.matricula}`}>
              <h5 className={`card-title ${styles.title}`}>{dentista.nome}</h5>
              <p className={`card-title ${styles.title} ${theme === 'light' ? '' : styles.usernameDark}`}>@{dentista.usuario.username}</p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
