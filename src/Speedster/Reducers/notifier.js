import { ActionType } from '../Constants'

const INITIAL_STATE = {
    notifications: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.ENQUEUE_SNACKBAR:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        key: action.key,
                        ...action.notification,
                    },
                ],
            }
        case ActionType.CLOSE_SNACKBAR:
            return {
                ...state,
                notifications: state.notifications.map(notification => ((action.dismissAll || notification.key === action.key)
                        ? { ...notification, dismissed: true }
                        : { ...notification }
                ))
            }
        case ActionType.REMOVE_SNACKBAR:
            return {
                ...state,
                notifications: state.notifications.filter(notification => notification.key !== action.key)
            }
        default:
            return state
    }
}
