
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Page/Home/Home/Home';
import Services from './component/Page/Home/Services/Services';
import Footer from './component/Page/Shared/Footer/Footer';
import Header from './component/Page/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>



    </div>
  );
}

export default App;
