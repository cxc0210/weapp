import { Reducer } from 'redux';
import { EffectsCommandMap, Subscription } from 'dva-core';
import { GlobalModelState } from './global';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean };
  models: {
    global?: boolean;
  };
}

export interface rootState {
  loading: Loading;
  global: GlobalModelState;
}

export type Action<P = any, C = (payload: P) => void> = {
  type: string;
  payload?: P;
  callback?: C;
  meta?: {
    mixpanel?: any;
  };
  [key: string]: any;
};

export type Effect = (
  action: Action,
  effects: EffectsCommandMap & {
    select: <T>(func: (state: rootState) => T) => T;
  }
) => void;

export interface DvaModel<T> {
  namespace: string;
  state: T;
  reducers?: { [key: string]: Reducer<T> };
  effects?: { [key: string]: Effect };
  subscriptions?: { [key: string]: Subscription };
}