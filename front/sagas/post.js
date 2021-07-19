import axios from "axios"
import shortid from "shortid"
import {
  fork,
  all,
  takeLatest,
  throttle,
  takeLeading,
  delay,
  put,
  call,
} from "redux-saga/effects"
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  dummyList,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
} from "../reducers/post"

function addPostAPI(data) {
  return axios.post("/post", data)
}
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data)
    //yield delay(1000)
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function imageUploadAPI(data) {
  return axios.post("/post/image", data)
}
function* imageUpload(action) {
  try {
    const result = yield call(imageUploadAPI, action.data)
    //yield delay(1000)
    yield put({
      type: IMAGE_UPLOAD_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: IMAGE_UPLOAD_FAILURE,
      error: err.response.data,
    })
  }
}

function loadPostAPI(lastId) {
  return axios.get(`/posts?lastId=${lastId}`)
}
function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.lastId)
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function addCommentAPI(data) {
  return axios.post("/post/image", data)
}
function* addComment(action) {
  try {
    //const result = yield call(addCommentAPI, action.data)
    yield delay(1000)
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    })
  }
}

function likePostAPI(data) {
  return axios.patch(`/post/${data}/like`)
}
function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data)
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function unlikePostAPI(data) {
  return axios.patch(`/post/${data}/unlike`)
}
function* unlikePost(action) {
  try {
    //const result = yield call(addCommentAPI, action.data)
    yield delay(1000)
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: action.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}
function* watchImageUpload() {
  yield takeLatest(IMAGE_UPLOAD_REQUEST, imageUpload)
}
function* watchLoadPost() {
  yield throttle(3000, LOAD_POST_REQUEST, loadPost)
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}
function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost)
}
function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost)
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchImageUpload),
    fork(watchLoadPost),
    fork(watchAddComment),
    fork(watchLikePost),
    fork(watchUnlikePost),
  ])
}
