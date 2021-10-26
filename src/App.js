import { Route,Switch } from 'react-router'
import Admin from './containers/Admin/Admin'
import './App.css'
const App = ()=> {
  return (
    <div className="App">
      <Switch>
          <Route path="/admin" component={Admin}/>
          <Route path="/" component={Admin}/>
        </Switch>
    </div>
  );
}

export default App;
