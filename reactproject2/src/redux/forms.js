import * as ActionTypes from './ActionTypes';

export const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};

export const Feedback = (state = { errMess: null, feedbacks:[]}, action) => {
  switch (action.type) {
    case ActionTypes.FEEDBACK_FETCH:
      return {...state, errMess: null, feedbacks: action.payload};

    case ActionTypes.FEEDBACK_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_FEEDBACK:
        var feedback = action.payload;
        return { ...state, feedbacks: state.feedback.concat(feedback)};

    default:
      return state;
  }
};