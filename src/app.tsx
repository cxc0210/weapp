import { Provider } from "react-redux";
import dva from "./utils/dva";
import models from './models/index';
import "./app.scss";

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

const App = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
