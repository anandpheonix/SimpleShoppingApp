import { add } from './simplefunc';

describe('Unit Testing using Jasmine', () => {
    it('should return sum', () => {
        expect(add(6, 9)).toEqual(15);
    });
});
