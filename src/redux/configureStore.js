import { applyMiddleware, createStore } from "redux";
import { reducer } from "./features/ToDo";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";

const logger = createLogger({
    diff: true,
    collapsed: true,
});

export const store = createStore(reducer, applyMiddleware(thunk, logger));