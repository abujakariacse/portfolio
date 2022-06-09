import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home';
import Loader from './Pages/Loader';
import Navbar from './Pages/Navbar';





function App() {
  const [showLoading, setShowLoading] = useState(false)
  useEffect(
    () => {
      setShowLoading(true)
      let timer1 = setTimeout(() => setShowLoading(false), 1200);
      return () => {
        clearTimeout(timer1);
      };
    }, [])

  if (showLoading) {
    return <Loader
      background={"transparent"}
      desktopSize={"150px"}

    />
  }
  return (
    <div>
      <div className="App">
        <Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
          </Routes>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
