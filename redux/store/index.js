import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { user } from "../reducers/user";
import { room } from '../reducers/room';
import { rooms } from '../reducers/rooms';

const rootReducers = combineReducers({ user, room, rooms });

// apply Middleware
const middleware = applyMiddleware(thunkMiddleware, logger);

export const store = createStore(rootReducers, middleware);
