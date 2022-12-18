import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../contacts/operations';

const contactsInitialState = {
  items: [],
  filter: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        for (const item of state.items) {
          if (item.name === action.payload.name) {
            return alert(
              `${action.payload.name} is already in contacts`
            );
          }
        }
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const idx = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(idx, 1);
      })
      .addMatcher(isAnyOf(
        fetchContacts.fulfilled,
        addContact.fulfilled,
        deleteContact.fulfilled
      ), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(
        fetchContacts.pending,
        addContact.pending,
        deleteContact.pending
      ), handlePending)
      .addMatcher(isAnyOf(
        fetchContacts.rejected,
        addContact.rejected,
        deleteContact.rejected
      ), handleRejected);
  }
});
export const contactsReducer =  contactsSlice.reducer;
export const { updateFilter } = contactsSlice.actions;
