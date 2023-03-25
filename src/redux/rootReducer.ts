import auth from './slices/auth';
import authApi from './services/auth';
import fridge from './slices/fridge';

const rootReducer = {
  auth,
  fridge,
  [authApi.reducerPath]: authApi.reducer,
};

export default rootReducer;
