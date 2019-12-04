import actionTypes from "../constants/actionTypes";

function locationsReceived(locations) {
  return {
    type: actionTypes.LOCATIONS_RECEIVED,
    locations: locations
  };
}

function locationItemReceived(locationItem) {
  return {
    type: actionTypes.LOCATIONITEM_RECEIVED,
    locationItem: locationItem
  };
}

function locationItemLoading() {
  return {
    type: actionTypes.LOCATIONITEM_LOADING
  };
}

export function fetchLocations() {
  return dispatch => {
    return fetch(`/location/all`)
      .then(response => response.json())
      .then(data => dispatch(locationsReceived(data.data)))
      .catch(e => console.log(e));
  };
}

export function fetchLocationItem(id) {
  return dispatch => {
    return fetch(`/location/${id}`)
      .then(response => response.json())
      .then(data => dispatch(locationItemReceived(data.data)))
      .catch(e => console.log(e));
  };
}

export function submitLocation(data) {
  return dispatch => {
    return fetch("/location/", {
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
