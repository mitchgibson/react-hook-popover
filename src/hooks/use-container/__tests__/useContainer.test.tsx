/**
 * @jest-environment jsdom
 */
import {useContainer} from '..';

describe('useContainer', () => {
    it('exists', () => {
        expect(typeof useContainer).toBe('function');
    });
});
