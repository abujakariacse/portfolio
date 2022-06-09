import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Loader from './Pages/Loader';
import Navbar from './Pages/Navbar';



function App() {
  const [loading, setLoading] = useState(true);
  window.addEventListener("load", (event) => {
    setTimeout(() => { setLoading(false) }, 2500)
  })
  return (
    <div>
      {
        loading ?
          <Loader
            background={"transparent"}
            desktopSize={"150px"}

          />
          :
          <div className="App">
            <Navbar>
              <Routes>
                <Route path='/' element={<Home />}></Route>
              </Routes>
            </Navbar>
          </div>
      }
    </div>
  );
}

export default App;
