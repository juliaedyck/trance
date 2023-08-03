
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';


const App = ()=> {
  return (
  <>
  <Router>
  

  <Routes>
    <Route path="/" element={<Homepage />} />

    </Routes>

</Router>
  </>
  );
}

export default App;
