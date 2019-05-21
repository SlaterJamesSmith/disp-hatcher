import c from './../constants';



export default (state = {}, action) => {
  let newState;
  const { jobName, client, jobStart, jobEnd, jobNotes, id } = action;

  switch (action.type) {
  case c.ADD_JOB:
    newState = Object.assign({}, state, {
      [id]: {
        jobName: jobName,
        client: client,
        jobStart: jobStart,
        jobEnd: jobEnd,
        jobNotes: jobNotes,
        id: id
      }
    });


    console.log(state)
    console.log(newState);
    return newState;

    case c.REMOVE_JOB:
      newState = Object.assign({}, state);
      delete newState[id]
      console.log('hello! remove member!');
      console.log(newState);

      return newState

  default:
    return state;
  }
};
