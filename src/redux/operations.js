import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://65ce3b7dc715428e8b404162.mockapi.io";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/contacts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  "contacts/fetchAddContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/contacts`, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const fetchDeleteContact = createAsyncThunk(
  "contacts/fetchDeleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)