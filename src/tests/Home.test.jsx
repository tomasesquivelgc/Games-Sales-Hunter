import { render, screen, waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

const mockStore = configureMockStore([]);

describe('Home', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      deals: [],
    });
  });

  it('shouldnt fetch items from API when there are some', async () => {
    store = mockStore({
      deals: [
        {
          dealID: '1',
          title: 'Test Game',
          salePrice: '1.00',
          thumb: 'https://www.example.com/image.png',
        },
      ],
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
  it('should render items from the store', () => {
    store = mockStore({
      deals: [
        {
          dealID: '1',
          title: 'Test Game',
          salePrice: '1.00',
          thumb: 'https://www.example.com/image.png',
        },
      ],
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Test Game')).toBeDefined();
  });
});
