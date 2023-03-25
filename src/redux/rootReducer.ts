import auth from './slices/auth';
import authApi from './services/auth';
import fridge from './slices/fridge';
import fridgeApi from './services/fridge';

const rootReducer = {
  auth,
  fridge,
  [authApi.reducerPath]: authApi.reducer,
  [fridgeApi.reducerPath]: fridgeApi.reducer,
};

export default rootReducer;
