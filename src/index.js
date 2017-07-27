//Import React
import React from 'react';
import ReactDOM from 'react-dom';

//Import Styling
import './styles/index.css';


//import React React-router
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

//import service working
import registerServiceWorker from './registerServiceWorker';



import App from './components/App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout';



ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={BaseLayout}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About}/>

      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
