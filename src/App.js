import { Route, Switch } from 'react-router';

import Home from './pages/Home/Home';

import './App.css';

function App() {
  return (
    <Route>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </Route>

  );
}

export default App;
