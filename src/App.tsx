import * as React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Route exact={true} path="/" component={HomePage}/>
        <Route exact={true} path="/login" component={LoginPage}/>
      </div>
    );
  }
}

export default App;
