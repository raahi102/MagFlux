import './_global.scss';

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import NotFoundScreen from './screens/404/NotFound';
import AboutUsScreen from './screens/aboutus/aboutus';
import Approach from './screens/approach/approach';
import CourseDetailsScreen from './screens/courseDetails/courseDetails';
//import HomeScreen from './screens/home/home';
import LeadGenerationScreen from './screens/leadGeneration/leadGeneration';
import ProgramScreen from './screens/programs/programs';

const LattuRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <section className="header">
        <Header />
      </section>
      <Switch>
        <Route path="/" exact>
        <ProgramScreen />
        </Route>
        <Route path="/programs">
          <ProgramScreen />
        </Route>
        <Route path="/aboutus">
          <AboutUsScreen />
        </Route>
        <Route path="/bookdemo">
          <LeadGenerationScreen />
        </Route>
       
        <Route path="/coursedetails">
          <CourseDetailsScreen />
        </Route>
        <Route path="/approach">
          <Approach />
        </Route>
        <Route path="*">
          <NotFoundScreen />
        </Route>
      </Switch>
      <section className="header">
        <Footer />
      </section>
    </Router>
  );
};

export default LattuRouter;
