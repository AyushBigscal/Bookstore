// src/app/store/post.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { PostState } from './post.reducer';
import { IBook } from 'src/Ibook';

const selectPostState = createFeatureSelector<IBook[]>('posts');
// const selectPostStateSelector = (state: IBook[]) => state;
export const selectAllPosts = createSelector(
  selectPostState,
  (state: IBook[]) => {
    console.log('stateeeeeeeeeeee', state);
    
    return state
  }
);
