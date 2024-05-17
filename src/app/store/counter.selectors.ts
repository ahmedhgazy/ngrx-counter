import { createSelector } from '@ngrx/store';

export const selectCount = (state: { counter: number }) => {
  return state.counter;
};

//?Nice Feature
export const selectDouble = createSelector(
  selectCount,
  // count here is the returned value of selectCount
  (count) => count * 2
);
