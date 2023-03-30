import EventEmitter from "eventemitter3";
import { EVENT_TYPES } from "./constant";
export const UploadEmitter = new EventEmitter();

export const openModal = (data?: Record<string, string>) => {
  UploadEmitter.emit(EVENT_TYPES.OPEN, data);
};
