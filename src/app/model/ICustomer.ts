import { Icard as Card } from 'src/app/model/Icard';

export interface ICustomer {
    UserName: string;
    CustomerId: string;
    CustomerName: string;
    Address: string;
    BankName: string;
    Cards: Card[];
}
