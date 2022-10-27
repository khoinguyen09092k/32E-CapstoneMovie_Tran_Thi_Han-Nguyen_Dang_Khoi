
import './App.css';
import { createBrowserHistory } from 'history'
import {Route, Router, Switch } from 'react-router'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import News from './pages/News/News';
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>

        <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
        <Route path="/register" exact Component={Register}></Route>
        <Route path="/login" exact Component={Login}></Route>
        <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
        <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
      </Switch>
    </Router>
  );
}

export default App;
