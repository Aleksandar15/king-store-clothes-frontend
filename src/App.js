import { GlobalStyle } from './global.styles';
// import './App.css';

import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';
// import CheckoutPage from './pages/checkout/checkout.component';

import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/signin-signup/signin-signup.component'))
const ContactPage = lazy(() =>import('./pages/contact/contact'));

const App = ({ checkUserSession, currentUser }) =>{

  useEffect(() =>{
    checkUserSession()
  }, [checkUserSession])

    return (
      <div>
        <GlobalStyle/>
        <Header  />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
  );
  }


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () =>dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
