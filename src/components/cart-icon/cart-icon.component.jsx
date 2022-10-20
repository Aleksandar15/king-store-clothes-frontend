import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden, toggleCartOn  } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount, toggleCartOn, hidden }) => (
  <CartContainer 
    onMouseEnter={toggleCartOn}
    onMouseLeave={toggleCartHidden}
  >
    {
      hidden ? null :
      <CartDropdown/>
    }
    <ShoppingIcon className='shopping-icon'/>
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  toggleCartOn: () => dispatch(toggleCartOn())
})

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount,
  hidden: selectCartHidden
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);