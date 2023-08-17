import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the store
const initialState = {
    id: 'None',
    isLoading: false,
    search: '',
    schools: [],
};

// Create a slice of the store using createSlice
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        // Define a "addId" reducer that updates the "id" field of the state with the action's payload
        addId: (state, action) => {
            state.id = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        addSearch: (state, action) => {
            state.search = action.payload
        },
        addSchool: (state, action) => {
            state.schools = action.payload
        }
    }
});


export const { addId, setLoading, addSearch, addSchool } = postSlice.actions;

export default postSlice.reducer;
