import React, {FC} from 'react';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Footer from "./components/Footer/Footer";
import './App.scss'
import {Route, Routes} from 'react-router-dom';
import CustomizedAccordions from "./components/Main/Accordion";

const App: FC = () => {
  return (
      <div className='wrapper'>
          <Header/>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/users" element={<CustomizedAccordions/>}/>
              <Route path="*" element={<div>Not Found</div>}/>
          </Routes>
          <Footer/>
      </div>
  );
};

export default App;
