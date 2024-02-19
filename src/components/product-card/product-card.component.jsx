import {ProductCardContainer, Footer, Name, Location, Price}from '../product-card/product-card.styles.jsx'

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.reducer.js';

const ProductCard = ({product})=> {
    const {name, imageUrl, location,price }= product
    const dispatch= useDispatch()
    const addProductToCartHandler = ()=> dispatch(addItemToCart(product))
    return(
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name className='name'>{name}</Name>
            <Location className='location'>{location}</Location>
            <Price className='price'>EUR{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick= {addProductToCartHandler}>Add to cart</Button>
    </ProductCardContainer>
   )

}

export default ProductCard;