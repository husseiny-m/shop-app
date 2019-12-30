import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ itemsCount, toggleCartDropdown }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toggleCartDropdown} />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapStateToProps = (state) => {
  return {
    itemsCount: state.cart.cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartHidden())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
