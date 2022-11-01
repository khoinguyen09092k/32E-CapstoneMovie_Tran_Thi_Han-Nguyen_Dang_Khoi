import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import { Suspense, lazy } from 'react'
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Loading from "./components/Loading/Loading";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile/Profile";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Films from "./pages/Admin/Films/Films";
import Showtime from "./pages/Admin/Showtime/Showtime";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Edit from "./pages/Admin/Films/Edit/Edit";

const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory()

function App() {

  const {userLogin} = useSelector(state => state.quanLyNguoiDungReducer)
  console.log("userLogin: ", userLogin);

  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <HomeTemplate path='/profile' exact Component={Profile} />
        <UserTemplate path='/login' exact Component={Login} />
        <CheckoutTemplate path='/checkout/:id' exact Component={Checkout} />

        {/* Suspense bọc những Component muốn tạo hiệu ứng Loading bằng 1 component Loader */}
        {/* <Suspense fallback={<Loader />}>
          <CheckoutTemplateLazy path='/checkout/:id' exact Component={Checkout} />
        </Suspense> */}

        <UserTemplate path='/register' exact Component={Register} />
        <AdminTemplate path='/admin' exact Component={Dashboard} />
        <AdminTemplate path='/admin/films' exact Component={Films} />
        <AdminTemplate path='/admin/films/addnew' exact Component={AddNew} />
        <AdminTemplate path='/admin/films/edit/:id' exact Component={Edit} />
        <AdminTemplate path='/admin/users' exact Component={Dashboard} />
        <AdminTemplate path='/admin/showtimes' exact Component={Showtime} />
      </Switch>
    </Router>
  );
}

export default App;
