import {listenEvents, getEventDetail, getEventUser, mergeEvents, Events} from './events'

const bootEvents = () => {
    return {
        listenEvents: listenEvents,
        events: () => Events,
    }
}
export {
    getEventDetail,
    getEventUser,
    listenEvents,
    Events,
    mergeEvents,
    bootEvents
}