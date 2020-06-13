import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route path={'/about'} component={About}/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
