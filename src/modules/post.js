import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from "../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURES] =
  createRequestActionTypes("post/READ_POST");

export const readPost = createAction(READ_POST, (id) => id);

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  error: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURES]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default post;