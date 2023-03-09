import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/projects/projects'
import clientReducer from '../features/testimonials/testimonials'

export const store = configureStore({
  reducer: {
    companies:projectsReducer,
    clients:clientReducer

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

