import Events from './events'

export const UserUnmounted = () => {
    window.dispatchEvent(new Event(Events.UserUnmounted))
}

export const UserMounted = detail => {
    window.dispatchEvent(new CustomEvent(Events.UserMounted, {detail: detail}))
}

export const UserAuthenticated = detail => {
    window.dispatchEvent(
        new CustomEvent(Events.UserAuthenticated, {detail: detail}),
    )
}

export const dispatchInitialised = (App) => {
    window.dispatchEvent(
        new CustomEvent(Events.AppInitialised, {detail: {App: App}}),
    )
    return this
}

export const dispatchBootstrap = () =>
    window.dispatchEvent(new Event(Events.AppBootstrap))

export const UserSignedOut = () => {
    window.dispatchEvent(new Event(Events.UserSignedOut))
}

export const dispatchUserUpdated = detail => {
    window.dispatchEvent(new CustomEvent(Events.UserUpdated, {detail: detail}))
}

export const SessionMounted = () => {
    window.dispatchEvent(new Event(Events.SessionMounted))
}

export const SessionRefreshed = detail => {
    window.dispatchEvent(
        new CustomEvent(Events.SessionRefreshed, {detail: detail}),
    )
}
export const TokenMismatched = (response) => {
    window.dispatchEvent(
        new CustomEvent(Events.TokenMismatched, {
            detail: {
                response: response,
            },
        }),
    )
}
export const AuthorizationFailed = (response) => {
    window.dispatchEvent(
        new CustomEvent(Events.AuthorizationFailed, {
            detail: {
                response: response,
            },
        }),
    )
}


export const SessionInitialised = () => {
    window.dispatchEvent(new Event(Events.SessionInitialized))
}
export const SessionCreated = () => {
    window.dispatchEvent(new Event(Events.SessionCreated))
}
export const SessionDestroyed = () => {
    window.dispatchEvent(new Event(Events.SessionDestroyed))
}
