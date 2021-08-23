import { create } from "dva-core";
import createLoading from "dva-loading";

let app: {
  use: (arg0: any) => void;
  model: (arg0: any) => any;
  start: () => void;
  _store: any;
  getStore: () => any;
  dispatch: any;
};
let store: { dispatch: any };
let dispatch: any;
let registered: boolean;

const createApp = (opt: { models: any[]; initialState: any }) => {
  app = create(opt);
  app.use(createLoading({}));

  if (!registered) opt.models.forEach((model: any) => app.model(model));
  registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;
  dispatch = store.dispatch;
  app.dispatch = dispatch;

  return app;
};

const getDispatch = () => app.dispatch;
const getStore = () => app.getStore();

export default {
  createApp,
  getDispatch,
  getStore,
};
