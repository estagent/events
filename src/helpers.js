import Events from "./events";
export const getEventDetail = (event, key, def) =>
    (event.detail ? (event.detail.hasOwnProperty(key) ? event.detail[key] : def) : def)

export const getEventUser = event => {
    if (!event.detail) if (!user) throw `detail not found in ${event.type}`
    const user = event.detail.user
    if (!user) throw `user not found on ${event.type}`
    if (!(user instanceof Object))
        throw `user is not object in event ${event.type}`
    return user
}

export const mergeEvents = (...objects) => {
    for (const obj of objects) {
        for (const key of Object.keys(obj)) {
            Events[key] = obj[key]
        }
    }
}

export const listenEvents = (...argumentList) => {
    const dumper = event => {
        console.log(`${event.type} fired  detail :`, event.detail ?? null)
    }
    const listen = event => {
        window.addEventListener(event, dumper)
        console.log(`listening ${event}`)
    }
    argumentList.forEach(function (argument) {
        if (argument instanceof Array) argument.forEach(event => listen(event))
        else if (argument instanceof Object)
            Object.values(argument).forEach(event => listen(event))
        else listen(argument)
    })
}