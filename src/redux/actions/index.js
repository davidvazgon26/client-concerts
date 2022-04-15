import axios from 'axios';

//Here we import all de actions creator:
import getEventDetail, { GET_EVENT_DETAIL } from './getEventDetail';
import filtEvents, { FILT_EVENTS } from './actionFiltEvents';
import getGenres, { GET_GENRES } from './actionGenres';
import cleanEventDetail, { CLEAN_EVENT_DETAIL } from './cleanEventDetail';
import getEvents, { GET_EVENTS } from './getEvents';
import getNameEvent, { GET_NAME_EVENT } from './getNameEvent';
import getStageEvent, { GET_STAGE_EVENT } from './getStageEvent';
import getArtistEvent, { GET_ARTIST_EVENT } from './getArtistEvent';


export const actions = {
    GET_EVENTS,
    GET_EVENT_DETAIL,
    GET_GENRES,
    FILT_EVENTS,
    CLEAN_EVENT_DETAIL,
    GET_NAME_EVENT,
    GET_STAGE_EVENT,
    GET_ARTIST_EVENT
}

const actionsCreator = {
    getEvents,
    getEventDetail,
    filtEvents,
    getGenres,
    cleanEventDetail,
    getNameEvent,
    getStageEvent,
    getArtistEvent
}

export default actionsCreator;