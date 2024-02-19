import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
  } from './checkout-item.styles.jsx'

  import { useDispatch } from 'react-redux'
  import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../store/cart/cart.reducer.js'

const CheckoutItem = ({cartItem})=> {
    const {name, imageUrl, price, quantity, location, timeslot, dayOfTheWeek} = cartItem
    const dispatch= useDispatch()

    const clearItemHandler= ()=> dispatch(clearItemFromCart(cartItem))
    const removeItemHandler= ()=> dispatch(removeItemFromCart(cartItem))
    const addItemHandler=()=> dispatch(addItemToCart(cartItem))

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