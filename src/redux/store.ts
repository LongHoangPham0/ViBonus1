import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/rootReducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.onSuccess', 'payload.onFailed'],
      },
    }).concat(sagaMiddleware, logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
sagaMiddleware.run(rootSaga)