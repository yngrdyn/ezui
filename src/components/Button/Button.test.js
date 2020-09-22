import { fireEvent, getByText, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  test('should display text', () => {
    const { container } = render(<Button text='Foo bar' />);

    getByText(container, 'Foo bar');
  });

  test("should handle click events", () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Button text="Click me, maybe?" onClick={onClickMock} />
    );
    const component = container.firstChild;

    fireEvent.click(component);

    expect(onClickMock).toBeCalled();
  });
});