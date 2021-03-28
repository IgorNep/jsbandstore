import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from 'components/LoginForm';

it('check Login Form Render', () => {
  const { queryByTitle } = render(<LoginForm onLoginSubmit={() => {}} />);
  const submitLoginBtn = queryByTitle('LoginSubmitButton');
  const input = queryByTitle('loginInputTest');
  const errorItem = queryByTitle('errorTitleForTest');
  expect(submitLoginBtn).toBeTruthy();
  expect(input).toBeTruthy();
  expect(errorItem).toBeFalsy();
});

describe('click button', () => {
  let onSubmitHandler;
  const mockSubmit = jest.fn();
  beforeEach(() => {
    onSubmitHandler = () => {
      mockSubmit();
    };
  });

  it('onClick', () => {
    const { queryByTitle } = render(
      <LoginForm onLoginSubmit={onSubmitHandler} />
    );
    const submitLoginBtn = queryByTitle('LoginSubmitButton');
    const input = queryByTitle('loginInputTest');
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.click(submitLoginBtn);
    const errorItem = queryByTitle('errorTitleForTest');
    expect(errorItem).toBeTruthy();
  });
  it('onClick', () => {
    const { queryByTitle } = render(
      <LoginForm onLoginSubmit={onSubmitHandler} />
    );
    const submitLoginBtn = queryByTitle('LoginSubmitButton');
    const input = queryByTitle('loginInputTest');
    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.click(submitLoginBtn);
    const errorItem = queryByTitle('errorTitleForTest');
    expect(errorItem).toBeFalsy();
  });
  it('onClick', () => {
    const { queryByTitle } = render(
      <LoginForm onLoginSubmit={onSubmitHandler} />
    );
    const submitLoginBtn = queryByTitle('LoginSubmitButton');
    const input = queryByTitle('loginInputTest');
    fireEvent.change(input, {
      target: { value: '12345678901212121212121212121' },
    });
    fireEvent.click(submitLoginBtn);
    const errorItem = queryByTitle('errorTitleForTest');
    expect(errorItem).toBeTruthy();
  });
  it('onClick', () => {
    const { queryByTitle } = render(
      <LoginForm onLoginSubmit={onSubmitHandler} />
    );
    const submitLoginBtn = queryByTitle('LoginSubmitButton');
    const input = queryByTitle('loginInputTest');
    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.click(submitLoginBtn);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });

  it('onClick', () => {
    const { queryByTitle } = render(
      <LoginForm onLoginSubmit={onSubmitHandler} />
    );
    const submitLoginBtn = queryByTitle('LoginSubmitButton');
    const input = queryByTitle('loginInputTest');
    fireEvent.change(input, {
      target: { value: '12345678901212121212121212121' },
    });
    fireEvent.click(submitLoginBtn);
    expect(mockSubmit).toHaveBeenCalledTimes(0);
  });
});
