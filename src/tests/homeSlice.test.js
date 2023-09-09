import { describe, expect, test } from 'vitest';
import homeReducer, { setDeals } from '../redux/homeSlice';

describe('reducers', () => {
  test('homeReducer', () => {
    const initialState = [];
    const deals = [{ id: 1, name: 'Deal 1' }];

    const action = setDeals(deals);
    const nextState = homeReducer(initialState, action);
    expect(nextState).toEqual(deals);
  });
});
