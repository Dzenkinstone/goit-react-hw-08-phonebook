export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.isError;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilterValue(state);
  const normalazedFilter = filter.toLocaleLowerCase();
  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalazedFilter)
  );
  return filtered;
};
