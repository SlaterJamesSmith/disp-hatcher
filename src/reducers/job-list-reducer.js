import c from './../constants';



export default (state = {}, action) => {
  let newState;
  const { jobName, client, jobStart, jobEnd, jobNotes, jobDispShow, jobMembers, id } = action;

  switch (action.type) {
  case c.ADD_JOB:
    newState = Object.assign({}, state, {
      [id]: {
        jobName: jobName,
        client: client,
        jobStart: jobStart,
        jobEnd: jobEnd,
        jobNotes: jobNotes,
        jobDispShow: false,
        jobMembers: jobMembers,
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


  case c.SHOW_JOB_DISPATCH:
    newState = Object.assign({}, state);
    Object.keys(newState).forEach(function(key) {
      newState[key].jobDispShow = false;
    });
    newState[id].jobDispShow = true;
    return newState

  default:
    return state;
  }
};
