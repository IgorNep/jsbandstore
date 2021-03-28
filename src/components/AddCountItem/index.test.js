import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddCountItem from 'components/AddCountItem';

it('check Add Count Item Render', () => {
  const { queryByTitle } = render(
    <AddCountItem
      onAddToCartClick={() => {}}
      countInStock={6}
      price={22}
      quantity={4}
    />
  );
  const input = queryByTitle('priceInputTest');
  expect(input).toBeTruthy();
});

describe('click button', () => {
  it('onChange', () => {
    const { queryByTitle } = render(
      <AddCountItem
        onAddToCartClick={() => {}}
        countInStock={6}
        price={22}
        quantity={4}
      />
    );
    const input = queryByTitle('priceInputTest');
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: 7 } });
    const errorDiv = queryByTitle('errorDivTest');
    expect(errorDiv).toBeTruthy();
  });
  it('onChange', () => {
    const { queryByTitle } = render(
      <AddCountItem
        onAddToCartClick={() => {}}
        countInStock={6}
        price={2}
        quantity={4}
      />
    );
    const input = queryByTitle('priceInputTest');
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: 6 } });
    const errorDiv = queryByTitle('errorDivTest');
    expect(errorDiv).toBeFalsy();
  });
  it('onChange', () => {
    const { queryByTitle } = render(
      <AddCountItem
        onAddToCartClick={() => {}}
        countInStock={6}
        price={2}
        quantity={4}
      />
    );
    const input = queryByTitle('priceInputTest');
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: 6 } });
    const totalPriceField = queryByTitle('totalPriceTest');
    expect(totalPriceField.innerHTML).toBe('12.00');
  });
  it('onClick add to cart button', () => {
    const mockFn = jest.fn();
    const onAddToCartClick = () => {
      mockFn();
    };
    const { queryByTitle } = render(
      <AddCountItem
        onAddToCartClick={onAddToCartClick}
        countInStock={6}
        price={2}
        quantity={4}
      />
    );
    const addBtn = queryByTitle('addToCartBtn');
    expect(addBtn).toBeTruthy();
    fireEvent.click(addBtn);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it('onClick increment button', () => {
    const { queryByTitle } = render(
      <AddCountItem
        onAddToCartClick={() => {}}
        countInStock={6}
        price={2}
        quantity={4}
      />
    );
    const incrementBtn = queryByTitle('incrementBtn');
    expect(incrementBtn).toBeTruthy();
    const input = queryByTitle('priceInputTest');
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: 6 } });
    fireEvent.click(incrementBtn);
    const errorDiv = queryByTitle('errorDivTest');
    expect(errorDiv).toBeTruthy();
  });
  it('onClick increment button', () => {
    const { queryByTitle } = render(
      <AddCountItem
        onAddToCartClick={() => {}}
        countInStock={6}
        price={2}
        quantity={4}
      />
    );
    const incrementBtn = queryByTitle('incrementBtn');
    expect(incrementBtn).toBeTruthy();
    const input = queryByTitle('priceInputTest');
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: 5 } });
    fireEvent.click(incrementBtn);
    const errorDiv = queryByTitle('errorDivTest');
    expect(errorDiv).toBeFalsy();
  });
});
