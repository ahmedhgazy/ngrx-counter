import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

const initialState = 0; //num ,str,bool,obj,arr

export const CounterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => {
    if (state === 0) {
      return 0;
    }
    return state - action.value;
  })
);

// under the hood
// export function CounterReducer(state = initialState) {
//   return state;
// }
