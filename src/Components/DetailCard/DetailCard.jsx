import { useEffect, useState, useContext } from "react";
import ScheduleFormModal from "../ScheduleFormModal/ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/global-context";

const DetailCard = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUserame] = useState('');
  const { id } = useParams();
  const {theme} = useContext(AuthContext)

  async function getDentist(){
    try{
      const {data} = await axios.get(`https://dhodonto.ctdprojetos.com.br/dentista?matricula=${id}`);
      setName(data.nome);
      setSurname(data.sobrenome);
      setUserame(data.usuario.username)
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getDentist()
  }, []);

  return (
    <>
      <h1> {name} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row ${theme === 'light' ? '' : styles.cardDark}`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {name}</li>
              <li className="list-group-item">
                Sobrenome: {surname}
              </li>
              <li className="list-group-item">
                Usuário: {username}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button} ${theme === 'light' ? '' : 'dark'}`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
