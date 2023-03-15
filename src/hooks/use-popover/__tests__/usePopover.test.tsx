/**
 * @jest-environment jsdom
 */
import {usePopover} from '..';

describe('usePopover', () => {
    it('exists', () => {
        expect(typeof usePopover).toBe('function');
    });
});
