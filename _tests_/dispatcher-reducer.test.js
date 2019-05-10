import dispatcherReducer from './../src/reducers/dispatcher-reducer'

describe('dispatcherReducer', () => {

  let action;
  const sampleTicketData = {      {
      firstName: 'Jack',
      lastName: 'Ofalltrades',
      email: 'BeNimble420@gmail.com',
      notesMaster: '',
      id: 'mock1'
    };

  test('Should return default state if no action type is recognized', () => {
    expect(dispatcherReducer({}, { type: null })).toEqual({});
  });

});
