import { LoginComponent } from './login.component';
import { User } from 'src/app/model/user';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs/internal/observable/of';

describe('LoginComponent', () => {
    let service: LoginComponent;
    let mockRouter;
    let mockLoginService;

    beforeEach(() => {

        mockRouter = jasmine.createSpyObj(['navigate']);
        mockLoginService = jasmine.createSpyObj(['validateUser']);

        service = new LoginComponent(mockRouter, mockLoginService);
    });

    it('should return correct User value from Form', () => {
        const user = { userName: 'customer2', password: 'customer2' };

        service.user = user;

        expect(service.user.userName).toEqual('customer2');
    });

    it('should return Incorrect User value from Form', () => {
        const user = { userName: 'customer3', password: 'customer3' };

        service.user = user;

        expect(service.user.userName).not.toEqual('customer2');
    });

    it('should have called ValidateUser method', () => {
        // tslint:disable-next-line: prefer-const
        let loginForm: NgForm;
        mockLoginService.validateUser.and.returnValue(true);
        mockRouter.navigate.and.returnValue(of(true));

        service.onSubmit(loginForm);

        expect(mockLoginService.validateUser).toHaveBeenCalled();
    });

    it('should have called Navigate method', () => {
        // tslint:disable-next-line: prefer-const
        let loginForm: NgForm;
        mockLoginService.validateUser.and.returnValue(true);
        mockRouter.navigate.and.returnValue(of(true));

        service.onSubmit(loginForm);

        expect(mockRouter.navigate).toHaveBeenCalled();
    });
});
