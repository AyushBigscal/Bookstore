// src/app/store/post.reducer.ts
import { createReducer, on } from '@ngrx/store';

import { IBook } from '../Ibook';
import {
  UpdatePostSuccess,
  addPostSuccess,
  deletePostSuccess,
  loadPostsSuccess,
  signupPostSuccess,
} from './post.actions';

export const initialState: IBook[] = [];

export const postReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { posts }) => ([
    ...state,
    ...posts,
  ])),
  on(deletePostSuccess, (state, { post }) => ({
    ...state,
    post,
  })),
  on(addPostSuccess, (state, { post }) => ({
    ...state,
    post,
  })),
  on(UpdatePostSuccess, (state, { book }) => ({
    ...state,
    book,
  })),
   on(signupPostSuccess, (state, { post }) => ({
    ...state,
  post
  }))
);
