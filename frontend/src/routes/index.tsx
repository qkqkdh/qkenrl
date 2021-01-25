import React from 'react';
import Search from '../pages/Search';
import Index from '../pages/index';
import NotFound from '../pages/404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/search" component={Search}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;