import React, { Component } from 'react';
import { Link } from 'react-router';

const HomePage = () => (
  <div className="jumbotron">
    <h1>Administration</h1>
    <p>Cursito de React Online</p>
    <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
  </div>
);

export default HomePage;