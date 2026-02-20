import { createSlice } from '@reduxjs/toolkit';
import type { ProductsType } from '../@types';

// 🔥 localStorage dan olish
const savedLikes = localStorage.getItem('likelist');

const initialState: { likelist: ProductsType[] } = {
  likelist: savedLikes ? JSON.parse(savedLikes) : [],
};

export const LikeSlice = createSlice({
  name: 'LikeList',
  initialState,
  reducers: {
    collectLikeProduct: (state, action: { payload: ProductsType }) => {
      // duplicate tekshirish
      const exists = state.likelist.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.likelist = [...state.likelist, action.payload];
        localStorage.setItem('likelist', JSON.stringify(state.likelist));
      }
    },
    removeLikeProduct: (state, action: { payload: number }) => {
      state.likelist = state.likelist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem('likelist', JSON.stringify(state.likelist));
    },
  },
});

export const { collectLikeProduct, removeLikeProduct } = LikeSlice.actions;
