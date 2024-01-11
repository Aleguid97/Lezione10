import { render, screen } from '@testing-library/react';
import fantasy from '../data/fantasy.json';
import App from '../App';
import AllTheBooks from '../components/AllTheBooks';

describe('Is AllTheBooks working correctly', () => {
  it('Are there books', () => {
    render(<AllTheBooks />);
    const bookList = screen.queryAllByTestId('book-item');
    
    expect(bookList.length).toEqual(fantasy.length);
  });
});
