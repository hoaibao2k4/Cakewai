import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import { combineReducers } from 'redux';
// Kết hợp các reducers
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

// Cấu hình redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store với configureStore
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt kiểm tra tuần tự hóa
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// Tạo persistor
const persistor = persistStore(store);

export { store, persistor };
