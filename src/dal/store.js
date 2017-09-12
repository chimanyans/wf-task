import {createReduxStore} from 'helpers/redux';
import reducers from './reducers'

export const store = createReduxStore(reducers);