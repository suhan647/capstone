import "./App.css";
// import Carousal from "./components/carousal/Carousal";
import Header from "./components/header/Header";
import Routing from "./routing/Routing";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <> 
    <ToastContainer/>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
