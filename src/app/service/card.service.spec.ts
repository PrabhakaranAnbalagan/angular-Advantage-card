import { CardService } from './card.service';
import { ICustomer } from 'src/app/model/ICustomer';
import { Icard } from 'src/app/model/Icard';

describe('CardService', () => {
    let service: CardService;

    beforeEach(() => {
        service = new CardService();
    });

    it('should be Success with Valid Input', () => {
        const customer = 'customer1';

        const result = service.getCustomers(customer);

        expect(result.UserName).toEqual(customer);
    });

    it('should fail with InValid Input', () => {
        const customer = 'customer';

        const result = service.getCustomers(customer);

        expect(result).toEqual(null);
    });
});
