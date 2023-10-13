import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Main from './main.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/buturi" element={<Main roomIndex={1} />} />
        <Route path="/chiri" element={<Main roomIndex={2} />} />
      </Routes>
    </div>
  );
}

export default App;
