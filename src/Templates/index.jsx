import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../context/global-context";
import { useContext } from "react";

export default function BaseTemplate({children}){

  const {theme} = useContext(AuthContext)

    return(
        <div className={`app `}>
          <Navbar />
          <main className={`${theme === 'light' ? '' : 'dark'}`}>
            {children}
          </main>
          <Footer />
      </div>
    )
}