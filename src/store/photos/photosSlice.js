import { createSlice } from '@reduxjs/toolkit';
import { photosRequestAsync } from './photosAction';

const initialState = {
  loading: false,
  photos: [],
  error: '',
  count: 5,
  page: 1,
};

export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(photosRequestAsync.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(photosRequestAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.photos = action.payload.photos;
            state.error = action.payload.error;
            state.page = action.payload.page;
        })
        .addCase(photosRequestAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
});
export default photosSlice.reducer;
