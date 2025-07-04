import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  GET_TASKS,
  DELETE_KANBAN,
  ADD_CARD_DATA,
  UPDATE_CARD_DATA,
} from "./actionTypes"
import {
  getTasksSuccess,
  getTasksFail,
  deleteKanbanSuccess,
  deleteKanbanFail,
  addCardDataSuccess,
  addCardDataFail,
  updateCardDataSuccess,
  updateCardDataFail,
} from "./actions"

//Include Both Helper File with needed methods
import {
  getTasks,
  deleteKanban,
  addCardData,
  updateCardData,
} from "../../helpers/fakebackend_helper"
import { toast } from "react-toastify"

function* fetchTasks() {
  try {
    const response = yield call(getTasks)
    yield put(getTasksSuccess(response))
  } catch (error) {
    yield put(getTasksFail(error))
  }
}


function* onDeleteKanban({ payload: kanban }) {
  try {
    const response = yield call(deleteKanban, kanban)
    yield put(deleteKanbanSuccess(response))
    toast.success("KanBan با موفقیت حذف شد", { autoClose: 2000 });
  } catch (error) {
    yield put(deleteKanbanFail(error))
    toast.error("حذف KanBan ناموفق بود", { autoClose: 2000 });
  }
}

function* onAddCardData({ payload: cardData }) {
  try {
    const response = yield call(addCardData, cardData)
    yield put(addCardDataSuccess(response))
    toast.success("KanBan با موفقیت اضافه شد", { autoClose: 2000 });
  } catch (error) {
    yield put(addCardDataFail(error))
    toast.error("KanBan اضافه شد ناموفق بود", { autoClose: 2000 });
  }
}

function* onUpdateCardData({ payload: card }) {
  try {
    const response = yield call(updateCardData, card)
    yield put(updateCardDataSuccess(response))
    toast.success("به روز رسانی KanBan با موفقیت", { autoClose: 2000 });
  } catch (error) {
    yield put(updateCardDataFail(error))
    toast.error("به‌روزرسانی KanBan ناموفق بود", { autoClose: 2000 });
  }
}

function* tasksSaga() {
  yield takeEvery(GET_TASKS, fetchTasks)
  yield takeEvery(UPDATE_CARD_DATA, onUpdateCardData)
  yield takeEvery(DELETE_KANBAN, onDeleteKanban)
  yield takeEvery(ADD_CARD_DATA, onAddCardData)
}

export default tasksSaga
