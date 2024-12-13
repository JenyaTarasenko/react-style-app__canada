import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';








function App() {
  
  return (

    <div className="App">

      <Router>
        <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="about/" element={<AboutPage/>}/>
         
        </Routes>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
