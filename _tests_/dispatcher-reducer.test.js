import dispatcherReducer from './..src/reducers/dispatcher-reducer'

describe('dispatcherReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

});
