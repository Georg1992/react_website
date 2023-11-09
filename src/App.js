import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
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
                <Route path='/home' element={<HOME />} />
              
            </Routes>
        </Router>
    );
}
 
export default App;
