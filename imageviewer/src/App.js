// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
         <Header/>
         <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/register' element = {<Register/>}/>
         </Routes>
         
         </div>
  );
}

export default App;
