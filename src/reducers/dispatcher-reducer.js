export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_MEMBER':
    const { firstName, lastName, email, notesMaster, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        notesMaster: notesMaster,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
