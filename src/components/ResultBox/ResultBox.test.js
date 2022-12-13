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
  it('should render proper info about conversion when USD -> PLN', () => {
    const testCases = [
      { amount: 100, result: 350.0 },
      { amount: 20, result: 70.0 },
      { amount: 200, result: 700.0 },
      { amount: 34, result: 119.0 },
    ];
    for (let testObj of testCases) {
      render(<ResultBox from='USD' to='PLN' amount={testObj.amount} />);
      const container = screen.getByTestId('container');
      expect(container).toHaveTextContent(
        `$${testObj.amount.toFixed(2)} = PLN ${testObj.result.toFixed(2)}`
      );
      cleanup();
    }
  });
  it('should render the same when from & to are the same currency', () => {
    render(<ResultBox from='PLN' to='PLN' amount={100} />);
    const container = screen.getByTestId('container');
    expect(container).toHaveTextContent('PLN 100.00 = PLN 100.00');
    cleanup();
  });
});
