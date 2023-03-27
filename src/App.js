import { BrowserRouter, Routes,Route} from "react-router-dom";
import Sweets  from "./views/Sweets";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element= {<Sweets/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App;
