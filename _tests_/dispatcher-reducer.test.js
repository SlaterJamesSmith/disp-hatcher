import dispatcherReducer from './../src/reducers/dispatcher-reducer'

describe('dispatcherReducer', () => {

  let action;
  const sampleMemberData = {
      firstName: 'Jack',
      lastName: 'Ofalltrades',
      email: 'BeNimble420@gmail.com',
      notesMaster: '',
      id: 'mock1'
    };

  test('Should return default state if no action type is recognized', () => {
    expect(dispatcherReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new member data to masterMemberList', () => {
    const { firstName, lastName, email, notesMaster, id } = sampleMemberData;
    action = {
      type: 'ADD_MEMBER',
      firstName: firstName,
      lastName: lastName,
      email: email,
      notesMaster: notesMaster,
      id: id
    };
    expect(dispatcherReducer({}, action)).toEqual({
      [id] : {
        firstName: firstName,
        lastName: lastName,
        email: email,
        notesMaster: notesMaster,
        id: id
      }
    });
  });

});
