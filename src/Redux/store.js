import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' 
import rootReducer from "../reducers/index";

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

const persistor = persistStore(store)
 
export {store, persistor}