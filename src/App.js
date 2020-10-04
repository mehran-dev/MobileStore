import React from 'react';
import css from './App.module.css';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header-Footer/Header';
import Footer from './components/Header-Footer/Footer';
import Match from './components/match/match';
import Login from './components/Login/Login';
import Detail from './components/Detail/Detail';
import NotFound from './components/NotFound/NotFound';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Logout from './components/Logout/Logout';

import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {



  return (
    <div className={css.App}>
      <BrowserRouter>
        <Header />
        <div className={css.AppBody}>
          <Switch>
            <Route path="/products" component={ProductList} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/detail" component={Detail} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/" exact component={ProductList} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
