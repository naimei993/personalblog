import { Route,Switch } from 'react-router'
import ReactCanvasNest from 'react-canvas-nest';
import { BrowserRouter } from 'react-router-dom';
import Admin from './containers/Admin/Admin'
import './App.css'
const App = ()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          <Route path="/admin" component={Admin}/>
          <Route path="/" component={Admin}/>
          <ReactCanvasNest/>
        </Switch>
        </BrowserRouter>
        <ReactCanvasNest config = {{ pointColor: ' 255, 255, 255 ', lineColor: '41,153,153' }} style={{position: 'fixed', top:'7%',left:'0px',pointerEvents:'none',zIndex:9999}}/>
    </div>
  );
}

export default App;
