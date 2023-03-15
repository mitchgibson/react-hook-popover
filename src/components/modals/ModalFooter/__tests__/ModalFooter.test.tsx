/**
 * @jest-environment jsdom
 */
import React from 'react';
import { ModalFooter, ModalFooterProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ModalFooterProps = {
  
};

const setup = (props = defaultProps) => render(<ModalFooter {...props} />);

describe('ModalFooter', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
