import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/global-context";
import BaseTemplate from "./Templates";

import Home from "./Routes/Home";
import Login from "./Routes/Login"
import Detail from "./Routes/Detail"
import Queries from "./Routes/Queries";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <BaseTemplate>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/queries" element={<Queries />} />
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
          </Routes>
        </BaseTemplate>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
