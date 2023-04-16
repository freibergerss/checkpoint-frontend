import styles from "./Navbar.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/global-context";

const Navbar = () => {
  const { removeUserStorage, theme, setTheme } = useContext(AuthContext)
  const navigate = useNavigate()
  const token = localStorage.getItem('@token')
 
  function loginLogout() {
    if (token) {
     removeUserStorage();
    }
    navigate('/login')
  }

  function changeTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }


  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm ${theme === 'light' ? 'bg-light navbar-light' : 'bg-dark navbar-dark'}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <Link className={`navbar-brand ${styles.navbarBrand}`} to={'/home'}>
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <Link to={'/home'} className={`nav-link `}>
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink} `}>
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                {/* <a className="nav-link" href="/login">
                  Login
                </a> */}

                <button className={`nav-link ${theme === 'light' ? 'btn-light' : 'dark'}`} onClick={() => loginLogout()}>
                  {token ? "Logout" : "Login"}
                </button>



              </li>
              <li className={`nav-item`}>
                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button
                  className={`btn ${styles.btnStyle} ${theme === 'light' ? 'btn-light' : 'btn-dark'}`} 
                  onClick={() => changeTheme()}
                >
                 {theme === 'light' ? '☀' : '🌙'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
