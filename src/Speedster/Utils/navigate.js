import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export default function navigate(path) {
	history.push(path)
}
