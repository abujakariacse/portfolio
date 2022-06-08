import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Navbar>


    </div>
  );
}

export default App;
