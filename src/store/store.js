// import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares= [logger]
// const composedEnhancers= compose(applyMiddleware(...middleWares))

// export const store= createStore(rootReducer, undefined, composedEnhancers)



export const store= configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    // }).concat(middleWares)
    //middleware: middleWares - When you pass your own middleware, it overrides the default Redux middleware
})