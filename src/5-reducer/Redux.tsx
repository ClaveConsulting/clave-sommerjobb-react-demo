import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

const getCountFromWeb = createAsyncThunk("count/getFromWeb", async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return Math.floor(Math.random() * 100);
});

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    isLoading: false,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountFromWeb.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCountFromWeb.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    });
  },
});

const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export function Redux() {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
}

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch: () => AppDispatch = useDispatch;

function ReduxApp() {
  const count = useAppSelector((x) => x.value);
  const isLoading = useAppSelector((x) => x.isLoading);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>Count: {isLoading ? <span>...</span> : <code>{count}</code>}</p>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
      <button onClick={() => dispatch(getCountFromWeb())}>Randomize</button>
    </div>
  );
}
