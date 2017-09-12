import {combineReducers} from 'redux';

import {activePopupReducers} from 'dal/ui/popups';

export const reducers = combineReducers({
    ui: activePopupReducers,
});

export default reducers