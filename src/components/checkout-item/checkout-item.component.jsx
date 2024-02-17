import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
  } from './checkout-item.styles.jsx'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({cartItem})=> {

    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)
    const {name, imageUrl, price, quantity, location, timeslot, dayOfTheWeek} = cartItem

    const clearItemHandler= ()=> clearItemFromCart(cartItem)
    const removeItemHandler= ()=> removeItemFromCart(cartItem)
    const addItemHandler=()=> addItemToCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
          
                <BaseSpan>{name}</BaseSpan>
                <br></br>
                <BaseSpan>{location}</BaseSpan>
                <br></br>
                <BaseSpan>{timeslot}</BaseSpan>
                <br></br>
                <BaseSpan>{dayOfTheWeek}</BaseSpan>
      
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                  &#10094; </Arrow>
                  <Value>{quantity}</Value>
                    <Arrow onClick={addItemHandler}>&#10095;
                    </Arrow>
                    </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )

}

export default CheckoutItem;