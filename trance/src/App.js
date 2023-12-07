
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import GlobalStyles from './components/GlobalStyles';
import Listen from './components/Listen';
import About from './components/About';

const App = ()=> {
  return (
  <>
  <Router>
  <GlobalStyles/>

  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="listen" element={<Listen/>} />
    <Route path="about" element={<About/>} />



    </Routes>

</Router>
  </>
  );
}

export default App;
