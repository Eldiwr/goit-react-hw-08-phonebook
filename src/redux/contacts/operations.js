import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (name, { getState, extra }) => {
      const contacts = getState();
      for (const item of contacts.contacts.items) {
        if (item.name === name.name) {
          Notify.warning(`${name.name} is already in contacts`);
        return false;
      }
      }
    }
  }
   
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);