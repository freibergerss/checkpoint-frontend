import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function BaseTemplate({children}){
    return(
        <div className={`app light}`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    )
}