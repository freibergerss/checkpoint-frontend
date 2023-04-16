import { useEffect, useContext } from "react";
import Card from "../Components/Card/Card";
import { AuthContext } from "../context/global-context";

const Home = () => {

  const { theme } = useContext(AuthContext)

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className={`card-grid container`}>
        <Card />
      </div>
    </div>
  );
};

export default Home;
