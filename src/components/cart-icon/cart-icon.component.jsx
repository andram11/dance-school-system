import { setIsCartOpen } from '../../store/cart/cart.reducer'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles'

import { useDispatch, useSelector } from 'react-redux'

const CartIcon = () => {
    const dispatch= useDispatch()
    const isCartOpen= useSelector(selectIsCartOpen)
    const cartCount= useSelector(selectCartCount)

    const toggleIsCartOpen = ()=> dispatch(setIsCartOpen(!isCartOpen))
    
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )

}

export default CartIcon;