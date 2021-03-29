import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookItem from 'components/BookItem';

it('check Book Item Render', () => {
  render(
    <Router>
      <BookItem />
    </Router>
  );
});
