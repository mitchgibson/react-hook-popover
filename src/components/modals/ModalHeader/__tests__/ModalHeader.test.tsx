/**
 * @jest-environment jsdom
 */
import React from 'react';
import { ModalHeader, ModalHeaderProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ModalHeaderProps = {
  
};

const setup = (props = defaultProps) => render(<ModalHeader {...props} />);

describe('ModalHeader', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
