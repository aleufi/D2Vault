import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login'

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>

  );
}

export default App;
