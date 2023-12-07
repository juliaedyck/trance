
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import GlobalStyles from './components/GlobalStyles';
import Listen from './components/Listen';

const App = ()=> {
  return (
  <>
  <Router>
  <GlobalStyles/>

  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="listen" element={<Listen/>} />


    </Routes>

</Router>
  </>
  );
}

export default App;
