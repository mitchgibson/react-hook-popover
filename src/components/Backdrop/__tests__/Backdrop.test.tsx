/**
 * @jest-environment jsdom
 */
import React from 'react';
import { Backdrop, BackdropProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: BackdropProps = {
  
};

const setup = (props = defaultProps) => render(<Backdrop {...props} />);

describe('Backdrop', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
