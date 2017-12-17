import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import logger from "../middleware/logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../saga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

// store, persistor

export default function configureStore() {
  const config = {
    key: "CounterApp",
    storage
  };

  const reducer = persistReducer(config, rootReducer);

  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(logger, sagaMiddleware);

  const store = createStore(reducer, composeWithDevTools(middleware));

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {
    store,
    persistor
  };
}
