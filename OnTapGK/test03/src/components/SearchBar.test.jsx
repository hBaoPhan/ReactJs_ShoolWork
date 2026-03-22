import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
    test('renders input with placeholder Search', () => {
        render(<SearchBar onChange={() => { }} />);
        let inputElement = screen.getByPlaceholderText('Search');
        expect(inputElement).toBeInTheDocument();
    });

    test('calls onChange prop when typed', () => {
        const mockOnChange = vi.fn();
        render(<SearchBar onChange={mockOnChange} />);

        let inputElement = screen.getByPlaceholderText('Search');
        fireEvent.change(inputElement, { target: { value: 'React' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith('React');
    });
});