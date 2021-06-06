import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { selectProductReducer } from './productReducer';
export const reducer = combineReducers({
  allProduct: productReducer,
  product: selectProductReducer,
});
