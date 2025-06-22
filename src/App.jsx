import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from './Register.jsx';
import Login from './Login.jsx';
import LandingPage from './LandingPage.jsx';
function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
    </Router>
  );
    

}
export default App;