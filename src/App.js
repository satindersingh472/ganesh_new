import { BrowserRouter, Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element="<p>Hello world</p>"/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App;
