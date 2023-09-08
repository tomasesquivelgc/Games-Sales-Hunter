import { render, waitFor } from '@testing-library/react';
import { expect, it, test, vi } from 'vitest';
import ViewDeal from '../components/ViewDeal';
import { Provider } from 'react-redux'; // Import Provider
import configureMockStore from 'redux-mock-store'; // Import mock store

global.fetch = vi.fn();

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

const mockStore = configureMockStore(); // Create a mock store

describe('ViewDeal Component', () => {

  it('should display "Loading..." when waiting for API response', async () => {
    // Mock an unresolved promise to simulate an ongoing API request
    fetch.mockResolvedValue(new Promise(() => {}));

    const store = mockStore({}); // Create a mock store

    const { getByText } = render(
      <Provider store={store}>
        <ViewDeal />
      </Provider>,
      {
        route: '/deals/1', // Simulate route parameter
      }
    );

    expect(getByText('Loading...')).toBeDefined();
  });

  // Add more test cases as needed to cover various scenarios and edge cases
});
