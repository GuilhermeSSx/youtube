import Header from "./components/header";
import Menu from "./components/menu";
import './App.css';
import { UserContext } from "./contexts/userContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Login from "./pages/login";

function App() {
  const { openMenu } = useContext(UserContext);


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="Content">
          <div>
            <Menu openMenu={openMenu}/>
          </div>
          <div>
            <Routes>
              <Route path='/' element={<Home openMenu={openMenu}/>} />
              <Route path='/library' element={<Library />} />
              <Route path='/history' element={<History />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
