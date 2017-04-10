import React, { PropTypes } from 'react';
import Header from './common/header';

const App = (props) => (
  <div className="container-fluid">
    <Header />
    {props.children}
  </div>
);

App.PropTypes = {
  children: PropTypes.object.required
};

export default App;