import { Route, Switch } from 'react-router';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Game from './pages/Game/Game';
import Statistics from './pages/Statistics/Statistics';
import AddQuestionForm from './pages/AddQuestionForm/AddQuestionFrom';
import Nick from './pages/Nick/Nick';
import './App.css';

function App() {
  return (
    <Route>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/nick' component={Nick} />
        <Route exact path='/game' component={Game} />
        <Route exact path='/statistics' component={Statistics} />
        <Route exact path='/add-question' component={AddQuestionForm} />
        <Route path='*' component={NotFound}/>
      </Switch>
    </Route>

  );
}

export default App;
