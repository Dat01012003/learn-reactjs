import userApi from '../../api/userApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
    'user/register', // Corrected action type string
    async (payload) => {
        try {
            // Call API to register
            console.log('payload', payload);
            const data = await userApi.register(payload);
            console.log('data',data);
            
            // Save data to local storage
            localStorage.setItem('access_token', data.jwt);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Return user data
            return data.user;
        } catch (error) {
            throw error; // Rethrow the error for rejection handling
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {},
    // cập nhật dữ liệu
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.current = action.payload;
        });
        builder.addCase(register.rejected, (state, action) => {
            // Handle rejection (optional)
        });
    }
});

const { reducer } = userSlice;
export default reducer;
