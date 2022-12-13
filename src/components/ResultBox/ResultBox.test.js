import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ResultBox from './ResultBox';
describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox amount={100} from='PLN' to='USD' />);
  });
  it('should render proper info about conversion when PLN -> USD', () => {
    const testCases = [
      { amount: 100, result: 28.57 },
      { amount: 20, result: 5.71 },
      { amount: 200, result: 57.14 },
      { amount: 345, result: 98.57 },
    ];
    for (let testObj of testCases) {
      render(<ResultBox from='PLN' to='USD' amount={testObj.amount} />);
      const container = screen.getByTestId('container');
      expect(container).toHaveTextContent(
        `PLN ${testObj.amount.toFixed(2)} = $${testObj.result}`
      );
      cleanup();
    }
  });
});
