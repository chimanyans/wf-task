import {combineReducers} from 'redux';
import {createUIReducer, uiDispatcher} from 'helpers/redux';

export const popupTypes = {
    NONE: 0,
    TASK_POPUP: 1,
};

const activePopupSuffix = "ACTIVE_POPUP";

const initialActivePopup = {
    type: popupTypes.NONE,
    data: null
};

const setActivePopup = (type, data) => {
    uiDispatcher(activePopupSuffix, {type, data})
};

export const closeActivePopup = () => {
    setActivePopup(...initialActivePopup)
};

export const openTaskPopup = () => {
    setActivePopup(popupTypes.TASK_POPUP, null)
};

export const activePopupReducers = combineReducers({
    activePopup: createUIReducer(activePopupSuffix, initialActivePopup)
});