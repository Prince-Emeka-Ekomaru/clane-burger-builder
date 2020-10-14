import React, { Component } from 'react';
import Aux from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

class OrderSummary extends Component {
  //This could be a functional component
  componentDidUpdate() {
    console.log('[OrderSummary] willUpdate');
  }
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <l1 key={igKey}>
            <span style={{textTransform: 'capitalized'}}> {igKey}</span>: {this.props.ingredients[igKey]}
          </l1>);
      });
    return (
      <Aux>
        <h3 className={classes.body}>Your Order</h3>
        <p className={classes.body}>A delicious burger with the following ingredients: </p>
        <ul className={classes.body}>
          {ingredientSummary}
        </ul>
        <p className={classes.body}><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p className={classes.body}>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</ Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</ Button>

      </Aux>
    );
  }

}

export default OrderSummary;
