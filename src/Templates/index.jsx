import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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