import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Home from './pages/Home/index.js';
import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import NavigationBanner from './components/navigationBar/NavigationBanner.js';



function App() {
  return (
    <BrowserRouter>
    <NavigationBanner/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
