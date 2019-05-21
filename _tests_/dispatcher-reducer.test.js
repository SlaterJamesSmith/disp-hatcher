import memberListReducer from './../src/reducers/member-list-reducer'

describe('dispatcherReducer', () => {

  let action;
  const sampleMemberData = {
      'mock1': {
        firstName: 'Jack',
        lastName: 'Ofalltrades',
        email: 'BeNimble420@gmail.com',
        notesMaster: '',
        id: 'mock1'
      },
      'mock2': {
        firstName: 'Fred',
        lastName: 'Ofalltrades',
        email: 'BeNimble420@gmail.com',
        notesMaster: '',
        id: 'mock2'
      }
    };

  test('Should return default state if no action type is recognized', () => {
    expect(memberListReducer({}, { type: null })).toEqual({});
  });


  test('Should return sample data minus second entry', () => {
    action = {
      type: 'REMOVE_MEMBER',
      id: 'mock2'
    }
    expect(memberListReducer(sampleMemberData, action)).toEqual({
      'mock1': {
        firstName: 'Jack',
        lastName: 'Ofalltrades',
        email: 'BeNimble420@gmail.com',
        notesMaster: '',
        id: 'mock1'
      }
    });
  });

  // test('Should successfully add new member data to masterMemberList', () => {
  //   const { firstName, lastName, email, notesMaster, id } = sampleMemberData;
  //   action = {
  //     type: 'ADD_MEMBER',
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     notesMaster: notesMaster,
  //     id: id
  //   };
  //   expect(memberListReducer({}, action)).toEqual({
  //     [id] : {
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: email,
  //       notesMaster: notesMaster,
  //       id: id
  //     }
  //   });
  // });

});
