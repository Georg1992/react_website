import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/Navigation';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import CV from './pages/cv';
import HOME from './pages/home'
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/cv' element={<CV />} />
                <Route path='/' element={<HOME />} index />
              
            </Routes>
        </Router>
    );
}
 
export default App;
