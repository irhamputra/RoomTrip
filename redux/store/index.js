import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { counter, user } from "../reducers/user";

const rootReducers = combineReducers({ user, counter });

// apply Middleware
const middleware = applyMiddleware(thunkMiddleware, logger);

export const store = createStore(rootReducers, middleware);
