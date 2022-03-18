import Events from './events'

export const Boot = () =>
    window.dispatchEvent(new Event(Events.AppBoot))


export const Initialised = (App) => window.dispatchEvent(
    new CustomEvent(Events.AppInitialised, {detail: {App: App}}),
)

export const UserUnmounted = () => window.dispatchEvent(new Event(Events.UserUnmounted))

export const UserMounted = detail => window.dispatchEvent(new CustomEvent(Events.UserMounted, {detail: detail}))

export const UserChanged = detail => window.dispatchEvent(new CustomEvent(Events.UserChanged, {detail: detail}))


export const UserAuthenticated = detail => window.dispatchEvent(
    new CustomEvent(Events.UserAuthenticated, {detail: detail}),
)

export const WalletExpired = () =>
    window.dispatchEvent(new Event(Events.WalletExpired))

export const WalletChanged = (wallet) =>
    window.dispatchEvent(new CustomEvent(Events.WalletChanged, {
        detail: {
            wallet: wallet,
        }
    }))

export const WalletUpdated = (wallet) =>
    window.dispatchEvent(new CustomEvent(Events.WalletUpdated, {
        detail: {
            wallet: wallet,
        }
    }))

export const UserSignedOut = () => window.dispatchEvent(new Event(Events.UserSignedOut))


export const SessionMounted = () => window.dispatchEvent(new Event(Events.SessionMounted))

export const SessionRefreshed = detail => window.dispatchEvent(
    new CustomEvent(Events.SessionRefreshed, {detail: detail}),
)

export const TokenMismatched = (response) => window.dispatchEvent(
    new CustomEvent(Events.TokenMismatched, {
        detail: {
            response: response,
        },
    }),
)

export const AuthorizationFailed = (response) => window.dispatchEvent(
    new CustomEvent(Events.AuthorizationFailed, {
        detail: {
            response: response,
        },
    }),
)


export const SessionInitialised = () => window.dispatchEvent(new Event(Events.SessionInitialized))
export const SessionCreated = () => window.dispatchEvent(new Event(Events.SessionCreated))
export const SessionDestroyed = () => window.dispatchEvent(new Event(Events.SessionDestroyed))
