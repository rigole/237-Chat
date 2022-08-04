import AuthScreen from "./pages/Auth"
import './App.css';
import HomePage from "./pages/HomePage"
import { useState } from "react"

function App() {

  const [loggedIn,setloggedIn] = useState(localStorage.getItem('jwt') ? true : false)


  return (
        <>
            {
                loggedIn ? <HomePage setloggedIn={setloggedIn}/> : <AuthScreen setloggedIn={setloggedIn} />
            }
        </>



  );
}

export default App;
