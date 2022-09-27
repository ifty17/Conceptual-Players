import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';

import AOS from "aos";
import "aos/dist/aos.css";

import 'react-toastify/dist/ReactToastify.css';
 import { ToastContainer, toast } from 'react-toastify';

function App() {
  // useEffect(() => {
  // AOS.init();
  // AOS.refresh();
  // }, []);
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
