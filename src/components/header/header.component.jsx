import React from 'react';
  // import './header.styles.scss';
// import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionInLink, OptionOutDiv } from './header.styles';


const Header = ({ currentUser, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo' to="/" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      {
        currentUser ? (
        <OptionOutDiv onClick={signOutStart}>
          SIGN OUT
        </OptionOutDiv>
      ) : (
        <OptionInLink to='/signin'
        >
          SIGN IN
        </OptionInLink>
      )}
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      <CartIcon/>
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})


const mapDispatchToProps = dispatch =>({
    signOutStart: () => dispatch(signOutStart()),
  });



export default connect(mapStateToProps, mapDispatchToProps)(Header);