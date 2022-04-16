
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './component/Page/CheckOut/CheckOut';
import Home from './component/Page/Home/Home/Home';

import Services from './component/Page/Home/Services/Services';
import LogIn from './component/Page/LogIn/LogIn';
import NotFound from './component/Page/NotFound/NotFound';
import Register from './component/Page/Register/Register';
import Footer from './component/Page/Shared/Footer/Footer';
import Header from './component/Page/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>



    </div>
  );
}

export default App;
