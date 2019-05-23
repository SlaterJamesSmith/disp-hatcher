import c from './../constants';



export default (state = {}, action) => {
  let newState;
  const { jobName, client, jobStart, jobEnd, jobNotes, jobDispShow, jobMembers, jobMembId, id } = action;

  switch (action.type) {
  case c.ADD_JOB:
    newState = Object.assign({}, state, {
      [id]: {
        jobName: jobName,
        client: client,
        jobStart: jobStart,
        jobEnd: jobEnd,
        jobNotes: jobNotes,
        jobDispShow: null,
        jobMembers: jobMembers,
        jobMembId: null,
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

  case c.SEND_OFFER:
    newState = Object.assign({}, state);
    // newState[id].jobMembers
    // console.log(id)
    // console.log('fire')
    // console.log(Object.keys(newState))
    // console.log([id])
    // const blah = [id];
    // const blahblah = Object.keys(newState);
    console.log(id)
    console.log(jobMembId)
    console.log(newState)
    // console.log(newState[id].jobMembers[jobMembId].offerSent)
    //
    // newState[id].jobMembers[jobMembId].offerSent = 'sent';
    console.log(newState)

    // newState.jobMembId = null,
    // newState[id].jobMembers[jobMembId].offerSent = null;



    return newState

  default:
    return state;
  }
};
