import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from './components/TopNav';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
   <div>
      <BrowserRouter>

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
          </Routes>
          
        </BrowserRouter>
   </div>
  );
}


export default App;
