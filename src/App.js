import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import CV from './pages/cv';
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/cv' element={<CV />} />
              
            </Routes>
        </Router>
    );
}
 
export default App;
