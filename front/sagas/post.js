import { fork, all, takeLatest, delay, put } from 'redux-saga/effects';
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from '../reducers/post';

function* addPost(action) {
    try {
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ]);
}
