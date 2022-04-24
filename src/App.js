
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header/Header';
import AddService from './Pages/Main/AddService/AddService';
import Home from './Pages/Main/Home/Home/Home';
import SingleService from './Pages/Main/Home/SingleService/SingleService';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:id' element={<SingleService></SingleService>}></Route>
        <Route path='/addservice' element={<AddService></AddService>}></Route>
      </Routes>
    </div>
  );
}

export default App;
