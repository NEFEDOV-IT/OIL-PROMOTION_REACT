import React, {FC} from 'react';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Footer from "./components/Footer/Footer";
import './App.scss'
import {Route, Routes} from 'react-router-dom';
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import Charts from "./pages/Charts/Charts";
import NotFound from "./pages/NotFound/NotFound";

const App: FC = () => {
  return (
      <div className='wrapper'>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/charts" element={<Charts/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
      </div>
  );
};

export default App;
