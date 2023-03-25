import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('<App />', () => {
  it('should render properly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });
});
