import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/menu' Component={Menu}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
