import { LoginService } from './login.service';
import { User } from 'src/app/model/user';
import { browser } from 'protractor';

describe('LoginService', () => {
    let service: LoginService;

    beforeEach(() => {
        service = new LoginService();
        browser.get('http://localhost:4200/');
    });

    it('should be Success with Valid Input', () => {
        const user = { userName: 'customer2', password: 'customer2' };

        const result = service.validateUser(user);

        expect(result).toBeTruthy();
    });

    it('should fail with InValid Input', () => {
        const user = { userName: 'customer', password: 'customer' };

        const result = service.validateUser(user);

        expect(result).toEqual(false);
    });
});
