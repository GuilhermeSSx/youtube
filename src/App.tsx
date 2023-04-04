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
import CreateVideo from "./pages/create_video";
import Search from "./pages/search";
import MyVideos from "./pages/my_videos";

function App() {
  const { openMenu } = useContext(UserContext);


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="MainContent">
          <div>
            <Menu openMenu={openMenu}/>
          </div>
          <div className="ContentPages">
            <Routes>
              <Route path='/' element={<Home openMenu={openMenu}/>} />
              <Route path='/library' element={<Library />} />
              <Route path='/history' element={<History />} />
              <Route path='/login' element={<Login />} />
              <Route path='/create-video' element={<CreateVideo />} />
              <Route path='/my-videos' element={<MyVideos />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
