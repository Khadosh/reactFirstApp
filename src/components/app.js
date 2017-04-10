import React, { PropTypes } from 'react';

const App = (props) => (
  <div className="container-fluid">
    <p>Header Here</p>
    {props.children}
  </div>
);

App.PropTypes = {
  children: PropTypes.object.required
};

export default App;