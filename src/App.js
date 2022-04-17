
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/Page/About/About';
import Blog from './component/Page/Blog/Blog';
import CheckOut from './component/Page/CheckOut/CheckOut';
import DetailService from './component/Page/Home/DetailService/DetailService';
import Home from './component/Page/Home/Home/Home';

import Services from './component/Page/Home/Services/Services';
import LogIn from './component/Page/LogIn/LogIn';
import NotFound from './component/Page/NotFound/NotFound';
import Register from './component/Page/Register/Register';
import RequireAuth from './component/Page/RequireAuth/RequireAuth';
import Footer from './component/Page/Shared/Footer/Footer';
import Header from './component/Page/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:serviceId' element={<DetailService></DetailService>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>



    </div>
  );
}

export default App;
