import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_KEY, URL_ALL_PHOTOS } from '../../../src/api/const';
import axios from 'axios';

export const photosRequestAsync = createAsyncThunk ('photos/fetch', (_, {getState}) => {
    const token = getState().token.token;
    const photos = getState().photos.photos;
    const page = getState().photos.page;
    const headers = {};

    const url = new URL(URL_ALL_PHOTOS);
    url.searchParams.set('client_id', ACCESS_KEY);
    url.searchParams.append('per_page', 3);
    // url.searchParams.append('page', page);

        if (token) {
            headers.Authorization = `bearer ${token}`;
        }
        return axios
        .get( url.href, {
            headers,
        })
        .then(data => {
           let newPhotos = data.data;
           if (page >= 1) {
            newPhotos = [...photos, ...newPhotos];
           } 
        return {
            photos: newPhotos,
        };   
    })
    .catch(error => ({ error: error.toString()}));
});