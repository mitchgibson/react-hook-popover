/**
 * @jest-environment jsdom
 */
import React from 'react';
import { ModalBody, ModalBodyProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ModalBodyProps = {
  
};

const setup = (props = defaultProps) => render(<ModalBody {...props} />);

describe('ModalBody', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
