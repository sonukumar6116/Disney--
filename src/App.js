
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Detail from "./Component/Detail";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Login from "./Component/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
