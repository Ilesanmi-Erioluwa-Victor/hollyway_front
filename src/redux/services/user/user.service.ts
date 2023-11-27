import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiClient } from 'src/utils/api';
import { RootState } from 'src/redux/store';
import { createAuthHeaders } from 'src/utils/authHeader';
import { RegisterUser } from 'src/redux/services/user/user.types';

export const registerAction = createAsyncThunk(
  'user/register',
  async (data: RegisterUser, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('auth/register', data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginAction = createAsyncThunk(
  'user/login',
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('auth/login', data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
