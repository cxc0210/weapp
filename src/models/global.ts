export interface GlobalModelState {
  text: string;
}

const globalModel = {
  namespace: "global",
  state: {
    text: 'Andre'
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default globalModel;
