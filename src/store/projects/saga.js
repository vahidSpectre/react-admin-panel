import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_PROJECTS, GET_PROJECT_DETAIL, DELETE_PROJECT, UPDATE_PROJECT } from "./actionTypes"
import {
  getProjectsSuccess,
  getProjectsFail,
  getProjectDetailSuccess,
  getProjectDetailFail,
  updateProjectSuccess,
  updateProjectFail,
  deleteProjectSuccess,
  deleteProjectFail,
} from "./actions"

//Include Both Helper File with needed methods
import { getProjects, getProjectsDetails, updateProject, deleteProject } from "../../helpers/fakebackend_helper"
import { toast } from "react-toastify"

function* fetchProjects() {
  try {
    const response = yield call(getProjects)
    yield put(getProjectsSuccess(response))
  } catch (error) {
    yield put(getProjectsFail(error))
  }
}

function* fetchProjectDetail({ projectId }) {
  try {
    const response = yield call(getProjectsDetails, projectId)
    yield put(getProjectDetailSuccess(response))
  } catch (error) {
    yield put(getProjectDetailFail(error))
  }
}

function* onUpdateProject({ payload: project }) {
  try {
    const response = yield call(updateProject, project)
    yield put(updateProjectSuccess(response))
    toast.success("به روز رسانی پروژه با موفقیت انجام شد", { autoClose: 2000 })
  } catch (error) {
    yield put(updateProjectFail(error))
    toast.error("به روز رسانی پروژه ناموفق بود", { autoClose: 2000 })
  }
}

function* onDeleteProject({ payload: project }) {
  try {
    const response = yield call(deleteProject, project)
    yield put(deleteProjectSuccess(response))
    toast.success("پروژه با موفقیت حذف شد", { autoClose: 2000 })
  } catch (error) {
    yield put(deleteProjectFail(error))
    toast.error("پروژه حذف نشد", { autoClose: 2000 })
  }
}

function* projectsSaga() {
  yield takeEvery(GET_PROJECTS, fetchProjects)
  yield takeEvery(GET_PROJECT_DETAIL, fetchProjectDetail)
  yield takeEvery(UPDATE_PROJECT, onUpdateProject)
  yield takeEvery(DELETE_PROJECT, onDeleteProject)
}

export default projectsSaga
