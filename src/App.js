//React imports
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch } from 'react-redux';


//Firebase imports
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';


//Reducer imports
import { setCurrentUser } from './store/user/user.reducer';

//Route components
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  const dispatch= useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      //In order to avoid non-serializable error, instead of disabling serializable check in Middleware
      const pickeduser= user && (({accessToken, email})=> ({accessToken, email}))(user)
      dispatch(setCurrentUser(pickeduser));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path= 'checkout' element= {<Checkout/>} />
      </Route>
    </Routes>
  );
};

export default App;
