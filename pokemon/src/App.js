import Pokemondashboard from './Pokemondashboard';
import Pokemondetail from './components/CardDetail/Pokemondetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/pokemon/:id' component={Pokemondetail} />
          <Route path='/' component={Pokemondashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
