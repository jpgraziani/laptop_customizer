import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartTotal from './ShoppingCartTotal';

class ShoppingCart extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
          {Object.keys(this.props.selected).map((feature, idx) =>
            <ShoppingCartItem
              selected={this.props.selected}
              feature={feature}
              idx={idx}
              featureHash={feature + '-' + idx}
              key={feature + '-' + idx}
              selectedOption={this.props.selected[feature]}
            />
          )}
          <ShoppingCartTotal
            selected={this.props.selected}
          />
      </section>
    );
  }
}

export default ShoppingCart;