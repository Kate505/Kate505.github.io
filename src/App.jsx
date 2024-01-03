import './App.css'
import {MainCard} from "./Components/MainCard.jsx";
import {Skeleton} from "./Components/Skeleton.jsx";

function App() {

  return (
    <Skeleton bodycontent={ <MainCard /> } />
  )
}

export default App
