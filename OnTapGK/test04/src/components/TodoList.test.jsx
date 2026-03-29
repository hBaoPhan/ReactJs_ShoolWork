import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
    test('hiển thị Loading khi prop loading = true', () => {
        render(<TodoList data={[]} loading={true} error={false} />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('hiển thị danh sách sản phẩm khi truyền data chuẩn', () => {
        const mockData = [
            { id: 1, name: 'Laptop', price: '1000', category: 'Tech', image: 'lap.png' }
        ];

        render(<TodoList data={mockData} loading={false} error={false} />);
        expect(screen.getByText('Laptop')).toBeInTheDocument();

        // const cards = document.querySelectorAll('.card');
        // expect(cards.length).toBe(1);
    });

    test('không hiển thị item nào nếu data rỗng', () => {
        render(<TodoList data={[]} loading={false} error={false} />);

        const cards = document.querySelectorAll('.card');
        expect(cards.length).toBe(0);
    });
});
