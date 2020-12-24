import { Instance, SnapshotIn } from "mobx-state-tree";
import { backgroundModel } from "../models/background";
import { contentModel } from "../models/content";
import { popupModel } from "../models/popup";
import * as messageActions from '../shared/messages/actions';

// Model snapshots
export type BackgroundStoreSnapshot = SnapshotIn<typeof backgroundModel>
export type ContentStoreSnapshot = SnapshotIn<typeof contentModel>
export type PopupStoreSnapshot = SnapshotIn<typeof popupModel>

// Model instances

export type BackgroundStoreInstance = Instance<typeof backgroundModel>
export type ContentStoreInstance = Instance<typeof contentModel>
export type PopupStoreInstance = Instance<typeof popupModel>

// Messages
export type MessageActions = ReturnType<typeof messageActions[keyof typeof messageActions]>
