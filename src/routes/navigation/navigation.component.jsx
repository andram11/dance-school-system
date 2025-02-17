//React imports
import { Fragment } from 'react';
import { Outlet} from 'react-router-dom';

//Redux imports
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

//Component imports
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';


import { signOutUser } from '../../utils/firebase/firebase.utils';

//Styles import
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles';


const Navigation = () => {
  const currentUser= useSelector((state)=> state.user.currentUser )
  const isCartOpen= useSelector(selectIsCartOpen)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className='nav-link' to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
       {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
