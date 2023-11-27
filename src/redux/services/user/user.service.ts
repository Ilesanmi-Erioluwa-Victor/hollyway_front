import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiClient } from 'src/utils/api';
import { RootState } from 'src/redux/store';
import { createAuthHeaders } from 'src/utils/authHeader';

export const registerAction = createAsyncThunk(
  "users/register",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("auth/register", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
