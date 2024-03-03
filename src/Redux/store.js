import { configureStore, createSlice } from "@reduxjs/toolkit";

// İlk olarak, bir dilim (slice) oluşturun
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false, // Başlangıçta kullanıcı giriş yapmamış olarak varsayalım
  },
  reducers: {
    start(state) {
      state.isLoggedIn = true;
    },
    stop(state) {
      state.isLoggedIn = false;
    },
  },
});

// Ardından, dilimi kullanarak bir mağaza oluşturun
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

// Dilimden eylem yaratıcılarını çıkarın
export const { start, stop } = authSlice.actions;

export default store;
