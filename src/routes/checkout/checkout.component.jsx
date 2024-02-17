//Styles import
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from '../checkout/checkout.styles.jsx'

//React imports
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

//Components imports
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const Checkout = ()=> {
const {cartItems, cartTotal}= useContext(CartContext)

    return(
        <CheckoutContainer>
           <CheckoutHeader>
            <HeaderBlock>
                <span>Course</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
            <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>

    </CheckoutHeader>
    {cartItems.map((cartItem) =>{
       
       return(

        <CheckoutItem key= {cartItem.id} cartItem={cartItem}/>
       ) 
    } )
    }

    <Total>Total : EUR {cartTotal}</Total>
</CheckoutContainer>
    )
}

export default Checkout;