import { render, screen, waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import nock from 'nock';
import { expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

const mockStore = configureMockStore([]);

describe('Home', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      deals: [{
        dealID: '1',
        title: 'Test Game',
        salePrice: '1.00',
        thumb: 'https://www.example.com/image.png',
      }],
    });
  });

  nock('https://www.cheapshark.com/api/1.0')
    .get('/deals?storeID=1')
    .reply(200, [
      {
        dealID: '1',
        title: 'Test Game',
        salePrice: '1.00',
        thumb: 'https://www.example.com/image.png',
      },
    ]);

  it('shouldnt fetch items from API when there are some', async () => {
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
