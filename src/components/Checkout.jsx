import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useCartApi } from '../context/CartsApi';


const Checkout = ({amount}) => {
    const {emptyCarts} = useCartApi()
    const onToken = (token)=>{
emptyCarts()
            fetch('/save-stripe-token', {
              method: 'POST',
              body: JSON.stringify(token),
            }).then(response => {
              response.json().then(data => {
                alert(`We are in business, ${data.email}`);
              });
            });
    }
  return (
    <StripeCheckout
        token={onToken}
        amount={amount}
        currency="INR"
        // email='syedhussainsaber8@gmail.com'

        shippingAddress
        stripeKey="pk_test_51Nc4ctSIRIUFA1LxbEHx76XF6NHOGyeXy0mKCpxxqxduYTHjqZcfkL52Kt6vafPBjvgiUBB3CuQsyVLgDwDmqQAX00WFSfLdsT"
      />
  )
}

export default Checkout