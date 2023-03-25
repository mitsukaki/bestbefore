import { render } from '@testing-library/react';
import ReduxProvider from 'containers/ReduxProvider';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('<App />', () => {
  it('should render properly', () => {
    render(
      <ReduxProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ReduxProvider>,
    );
  });
});
