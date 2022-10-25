
import './App.css';
import {createBrowserHistory} from 'history'
import {Router} from 'react-router'
export const  history = createBrowserHistory();
function App() {
  return (
   <Router history = {history}>

   </Router>
  );
}

export default App;
