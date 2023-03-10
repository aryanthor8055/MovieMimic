import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from '../utils/constants'

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: []
};

const MoviemimicSlice = createSlice({
    name: "Moviemimic",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
        })
    },
});

export const getGenres = createAsyncThunk("moviemimic/genres", async () => {
    const { data } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    console.log(data);
    // return data;
})

export const store = configureStore({
    reducer: {
        moviemimic: MoviemimicSlice.reducer,
    },
})