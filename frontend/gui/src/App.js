import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import BaseRouter from './routes';

class App extends Component {
  render() {
    return (
      <div>
          <BaseRouter />
      </div>
    );
  }
}

export default App;
