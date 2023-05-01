import "./App.css";
// import Carousal from "./components/carousal/Carousal";
import Header from "./components/header/Header";
import Routing from "./routing/Routing";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer/>
      <Header />
      <Routing />
    </>
  );
}

export default App;
