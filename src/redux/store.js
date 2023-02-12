
import { createStore } from "redux";
import productsReducer from "./reducer/ProductsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";



const store =createStore(productsReducer, composeWithDevTools() );

export default store;