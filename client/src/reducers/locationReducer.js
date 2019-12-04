import constants from "../constants/actionTypes";

var initialState = {
  locations: [],
  locationItem: {},
  locationItemLoading: true
};

export default (state = initialState, action) => {
  var updated = Object.assign({}, state);

  switch (action.type) {
    case constants.LOCATIONS_RECEIVED:
      updated["locations"] = action.locations;
      return updated;

    case constants.LOCATIONITEM_RECEIVED:
      updated["locationItem"] = action.locationItem;
      updated["locationItemLoading"] = false;
      return updated;

    case constants.LOCATIONITEM_LOADING:
      updated["locationItemLoading"] = true;
      return updated;

    default:
      return state;
  }
};
