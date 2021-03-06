import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.js';
import HomePage from './components/home/homePage.js';
import AboutPage from './components/about/aboutPage.js';
import CoursesPage from './components/courses/coursesPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
  </Route>
);