import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./page/home";
import Portfolio from "./page/portfolio";
import About from "./page/about";
import Detail from './page/detail';

function App() {
  return (
    <div style={{background: '#010127'}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
