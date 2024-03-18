import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Perfil from "./components/Perfil";
import DetallePerfil from "./components/DetallePerfil";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Perfil />}/>
          <Route path="/perfil" element={<DetallePerfil/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
