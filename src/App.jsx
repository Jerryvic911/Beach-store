import './App.css';
import Body from './landing-page-features/Body.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/Nopage.jsx';
import Abouts from './pages/abouts.jsx';
import Contact from './pages/contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="about" element={<Abouts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
