import { useEffect, useState } from 'react';
import styles from './ScheduleForm.module.css';
import api from '../../services/index';

const ScheduleForm = () => {
  useEffect(() => {
    getData();
  }, []);

  const [pacienteDB, setPacienteDB] = useState([]);
  const [dentistaDB, setDentistaDB] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [dentista, setDentista] = useState({});
  const [date, setDate] = useState('');

  async function getData() {
    try {
      const response = await api.get('/paciente', {});
      setPacienteDB(response.data.body);
      const response2 = await api.get('/dentista', {});
      setDentistaDB(response2.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(dentista);
    console.log(paciente);
    try {
      await api.post('/consulta', {
        'paciente': paciente,
        'dentista': dentista,
        'dataHoraAgendamento': date,
      });
      alert('Consulta marcada');
    } catch (error) {
      console.log(error);
      alert('Erro ao marcar consulta');
    }
  }

  return (
    <>

      <div className={`text-center container}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
                onChange={e =>
                  setDentista(dentistaDB[e.target.value])
                }
              >
                <option>Selecione um dentista</option>
                {dentistaDB.map((dados, index) => (
                  <option key={dados.matricula} value={index}>
                    {`${dados.nome} ${dados.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
                onChange={e =>
                  setPaciente(pacienteDB[e.target.value])
                }
              >
                <option>Selecione um paciente</option>
                {pacienteDB.map((dado, index) => (
                  <option key={dado.matricula} value={index}>
                    {`${dado.nome} ${dado.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label
                htmlFor="appointmentDate"
                className="form-label"
              >
                Data
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
              <label htmlFor="appointmentDate">Por favor selecionar uma data posterior a data de hoje.</label>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button}`}
              type="submit"
            >
              Marcar consulta
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;