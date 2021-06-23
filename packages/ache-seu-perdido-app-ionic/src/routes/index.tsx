import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Search from '../pages/Main/Search';
import Register from '../pages/Main/Register';
import Menu from '../pages/Main/Menu';
import Main from '../pages/Main';

export const PublicRoutes: React.FC = () => {
  return (
    <>
      <Route path="/main" component={Main} />
      <Route path="/" component={Main} exact={true} />
    </>
  );
};

export const TabRoutes: React.FC = () => {
  return (
    <>
      <Route path="/main/search" component={Search} exact={true} />
      <Route path="/main/register" component={Register} exact={true} />
      <Route path="/main/menu" component={Menu} />
      <Route path="/" render={() => <Redirect to="/main/search" />} exact={true} />
    </>
  );
};

export default TabRoutes;
