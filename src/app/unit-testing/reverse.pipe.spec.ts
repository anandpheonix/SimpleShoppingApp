import { ReversePipe } from './reverse.pipe';

describe('Unit Testing user-defined Pipe', () => {
    let pipe: ReversePipe;

    beforeEach(() => {
        pipe = new ReversePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
    it('reverses a string', () => {
        expect(pipe.transform('A2Z')).toEqual('Z2A');
    });
});
