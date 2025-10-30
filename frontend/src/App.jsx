import { useState } from 'react'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'

function App() {
    const [pageState, setPageState] = useState('landing-page')
    const handleButtonClick = () => {
        setPageState('home-page');
    }
    if(pageState === 'landing-page'){
        return(
          <LandingPage onButtonClick={handleButtonClick}/>
        )
    }
    if(pageState === 'home-page'){
        return(
            <HomePage />
        )
    }
}

export default App
