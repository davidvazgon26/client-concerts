//Here we import all de actions creator:

import getEventDetail, { GET_EVENT_DETAIL } from './getEventDetail';
import filtEvents, { FILT_EVENTS } from './actionFiltEvents';
import getGenres, { GET_GENRES } from './actionGenres';
import cleanEventDetail, { CLEAN_EVENT_DETAIL } from './cleanEventDetail';
import getEvents, { GET_EVENTS } from './getEvents';
import getNameEvent, { GET_NAME_EVENT } from './getNameEvent';
import postStage, { POST_STAGE } from './postStage';
import registerUser, { REGISTER_USER } from './registerUser';
import postArtist, {POST_ARTIST} from './postRegisterArtist';
import loginUser, { LOGIN_USER } from './loginUser';
import loginToken, { LOGIN_TOKEN } from './loginToken';
import clearAuthError, { CLEAR_AUTH_ERR } from './clearAuthErr';
import logout, { LOGOUT } from './logout';

export const actions = {
    GET_EVENTS,
    GET_EVENT_DETAIL,
    GET_GENRES,
    FILT_EVENTS,
    CLEAN_EVENT_DETAIL,
    GET_NAME_EVENT,
    POST_STAGE,
    REGISTER_USER,
    POST_ARTIST,
    LOGIN_USER,
    LOGIN_TOKEN,
    CLEAR_AUTH_ERR,
    LOGOUT
}

const actionsCreator = {
    getEvents,
    getEventDetail,
    filtEvents,
    getGenres,
    cleanEventDetail,
    getNameEvent,
    postStage,
    registerUser,
    postArtist,
    loginUser,
    loginToken,
    clearAuthError,
    logout
}

export default actionsCreator;
