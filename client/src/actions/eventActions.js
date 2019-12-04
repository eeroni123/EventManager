import actionTypes from "../constants/actionTypes";

function eventsReceived(events) {
  return {
    type: actionTypes.EVENTS_RECEIVED,
    events: events
  };
}

function eventItemReceived(eventItem) {
  return {
    type: actionTypes.EVENTITEM_RECEIVED,
    eventItem: eventItem
  };
}

function eventItemLoading() {
  return {
    type: actionTypes.EVENTITEM_LOADING
  };
}

function addParticipant(username, attendance) {
  return {
    type: actionTypes.EVENTS_ADDPARTICIPANT,
    username: username,
    attendance: attendance
  };
}

export function fetchEvents() {
  return dispatch => {
    return fetch(`/events`)
      .then(response => response.json())
      .then(data => dispatch(eventsReceived(data.data)))
      .catch(e => console.log(e));
  };
}

export function fetchEventItem(id) {
  return dispatch => {
    return fetch(`/events/${id}`)
      .then(response => response.json())
      .then(data => dispatch(eventItemReceived(data.data)))
      .catch(e => console.log(e));
  };
}

export function submitEvent(data) {
  return dispatch => {
    return fetch("/events/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      mode: "cors"
    }).catch(e => console.log(e));
  };
}

export function submitSignUp(eventItemID, username, data) {
  var token = localStorage.getItem("token") || null;

  return dispatch => {
    return fetch(`/events/${eventItemID}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data),
      mode: "cors"
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          dispatch(addParticipant(username, data.attendance));
        }
      })
      .catch(e => console.log(e));
  };
}
