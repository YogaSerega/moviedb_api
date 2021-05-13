import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../reducer/reducer';
import { requestMovieWatcher } from '../sagas/sagas';

const SagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  stateStore: reducer,
});
export const store = createStore(
  reducers, composeWithDevTools(applyMiddleware(SagaMiddleware)),
);
export const stStore = store.getState();
SagaMiddleware.run(requestMovieWatcher);
