import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    <header className='bg-blue-600  flex gap-8'>
        <h1>logo</h1>
        <nav className='flex gap-8'>
            <ul>
                <li>
                   <Link to="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
            </ul>
        </nav>
    </header>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
    </Routes>

    </>
  )
}

export default App