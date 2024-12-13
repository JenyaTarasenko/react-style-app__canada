import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/Services';








function App() {
  
  return (

    <div className="App">

      <Router>
        <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="about/" element={<AboutPage/>}/>
          <Route path="servis/" element={<ServicesPage/>}/>
          
        </Routes>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
