import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('renders input with placeholder "Search"', () => {
    // Render component với một hàm mock rỗng cho props onChange
    render(<SearchBar onChange={() => { }} />);

    // Tìm thẻ input thông qua placeholder
    const inputElement = screen.getByPlaceholderText('Search');

    // Kiểm tra input có xuất hiện trong document không
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange prop with correct value when user types', () => {
    // Tạo một mock function thay thế cho onChange
    const mockOnChange = jest.fn();

    render(<SearchBar onChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText('Search');

    // Giả lập sự kiện người dùng nhập chữ "React" vào ô input
    fireEvent.change(inputElement, { target: { value: 'React' } });

    // Kiểm tra xem hàm mockOnChange có được gọi 1 lần không
    expect(mockOnChange).toHaveBeenCalledTimes(1);

    // Kiểm tra xem hàm mockOnChange có được gọi với tham số là "React" không
    expect(mockOnChange).toHaveBeenCalledWith('React');
  });
});
