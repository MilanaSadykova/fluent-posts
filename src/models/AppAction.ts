import { AnyAction } from "redux";
import { ActionTypes } from "./ActionTypes";

export interface AppAction extends AnyAction { 
    type: ActionTypes;
}