import '../cart-item/cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    return (
        <div className='cart-item-container'>
            <img src={cartItem.imageUrl} alt= {`${cartItem.name}`}/>
            <div className='item-details'>
            <span className='name'>{cartItem.name}</span>
            <span className='prices'>{cartItem.quantity} x EUR{cartItem.price}</span>
            </div>
           
        </div>
    )
}

export default CartItem