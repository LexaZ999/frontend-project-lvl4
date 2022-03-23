import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalShow: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalShow: (state, action) => {
      const modalName = action.payload;
      state.modalShow = modalName;
    },
    resetModalShow: (state) => {
      state.modalShow = null;
    },
  },
});

export const { setModalShow, resetModalShow } = modalSlice.actions;

export default modalSlice.reducer;
