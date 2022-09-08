import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer'
import { categoriesReducer } from './categories/category.reducer';

// Root Redux Store
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
});