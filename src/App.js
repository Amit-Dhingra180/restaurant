import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


function App() {

  return (
    <div>
      <BrowserRouter>
      
        <Routes> 
          <Route path='/' exact Component={Home}/>
          <Route path='/menu' Component={Menu}/>
          <Route path='/about' Component={About}/>
          <Route path='/cart' Component={Cart}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/login' Component={Login}/>
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
