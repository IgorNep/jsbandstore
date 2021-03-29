import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'components/Navbar';

it('check Navbar Render', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
});
