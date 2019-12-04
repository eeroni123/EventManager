import constants from "../constants/actionTypes";

var initialState = {
  events: [],
  eventItem: {},
  eventItemLoading: true
};

export default (state = initialState, action) => {
  var updated = Object.assign({}, state);

  switch (action.type) {
    case constants.EVENTS_RECEIVED:
      updated["events"] = action.events;
      return updated;

    case constants.EVENTITEM_RECEIVED:
      updated["eventItem"] = action.eventItem;
      updated["eventItemLoading"] = false;
      return updated;

    case constants.EVENTITEM_LOADING:
      updated["eventItemLoading"] = true;
      return updated;

    case constants.EVENTS_ADDPARTICIPANT:
      var updatedParticipants = Object.assign(
        [],
        updated["eventItem"].participants
      );
      updatedParticipants.push({
        username: action.username,
        attendance: action.attendance
      });
      updated["eventItem"].participants = updatedParticipants;
      return updated;

    default:
      return state;
  }
};
