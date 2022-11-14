import { AuthService } from './auth.service';

describe('Auth service under test', () => {
    let service: any;
    beforeEach(() => (service = new AuthService()));
    it('should approve admin', () => {
        expect(service.userIsValid('Pheonix', 'Admin')).toBeTruthy();
    });
    it('should reject non admin', () => {
        expect(service.userIsValid('NotPheonix', 'Admin')).toBeFalsy();
    });
});
