//Styles import
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from '../checkout/checkout.styles.jsx'

//React imports
import { useSelector } from 'react-redux';

//Components imports
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';


const Checkout = ()=> {
const cartItems= useSelector(selectCartItems)
const cartTotal= useSelector(selectCartTotal)

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