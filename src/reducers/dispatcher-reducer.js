export default (state = [
    {
      firstName: 'Jack',
      lastName: 'Ofalltrades',
      email: 'BeNimble420@gmail.com',
      notesMaster: '',
      id: 'mock1'
    },
    {
      firstName: 'Jane',
      lastName: 'Jee-eye',
      email: 'hooya@yahoo.com',
      notesMaster: 'likes early shifts',
      id: 'mock2'
    },
    {
      firstName: 'Carl',
      lastName: 'Mell',
      email: 'ilikecandy@hotmail.com',
      notesMaster: '',
      id: 'mock3'
    },
    {
      firstName: 'Sarah',
      lastName: 'Sander',
      email: 'woodshopismyjam@auntiesarahwoodworking.com',
      notesMaster: '',
      id: 'mock4'
    }
  ],
action) => {
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
    console.log(state)
    console.log(newState);
    return newState;
  default:
    return state;
  }
};
