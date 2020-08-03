import { Injectable } from '@angular/core';
import { ICustomer } from 'src/app/model/ICustomer';
import { Icard } from 'src/app/model/Icard';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    getCustomers(userName: string): ICustomer {
        // tslint:disable-next-line: no-use-before-declare
        const customersObj = JSON.parse(customers);
        for (const obj of customersObj) {
            if (obj.UserName === userName) {
                return obj;
            }
        }
        return null;
    }


}
/* Mock Data */

const customers =
    `[
  {
    "UserName": "customer1",
    "CustomerId": "1001",
    "CustomerName": "John Smith",
    "Address": "120 Beach Road, India",
    "BankName": "ICICI Bank",
    "Cards":[{
        "CardNumber": "123456781001",
        "CardType": "Platinum",
        "Score": "10"
      }, {
        "CardNumber": "123456781003",
        "CardType": "Gold",
        "Score": "10"
      }, {
        "CardNumber": "123456781005",
        "CardType": "Silver",
        "Score": "10"
      }]
   },
   {
    "UserName": "customer2",
    "CustomerId": 1002,
    "CustomerName": "David Warner",
    "Address": "11A temple tower, Austrlia",
    "BankName": "HDFC Bank",
    "Cards":[{
      "CardNumber": "123456781001",
      "CardType": "Platinum",
      "Score": "10"
    },{
      "CardNumber": "123456781002",
      "CardType": "Platinum",
      "Score": "20"
    }, {
      "CardNumber": "123456781003",
      "CardType": "Gold",
      "Score": "10"
    },{
      "CardNumber": "123456781004",
      "CardType": "Gold",
      "Score": "20"
    }, {
      "CardNumber": "123456781005",
      "CardType": "Silver",
      "Score": "10"
    }, {
      "CardNumber": "123456781006",
      "CardType": "Silver",
      "Score": "20"
    }]
   },
   {
    "UserName": "customer3",
    "CustomerId": 1003,
    "CustomerName": "M S Dhoni",
    "Address": "10 Mumbai main, India",
    "BankName": "SBI Bank",
    "Cards":[ {
      "CardNumber": "123456781003",
      "CardType": "Gold",
      "Score": "10"
    },{
      "CardNumber": "123456781004",
      "CardType": "Gold",
      "Score": "20"
    }, {
      "CardNumber": "123456781005",
      "CardType": "Silver",
      "Score": "10"
    }, {
      "CardNumber": "123456781006",
      "CardType": "Silver",
      "Score": "20"
    }]
   },
    {
    "UserName": "customer4",
    "CustomerId": "1004",
    "CustomerName": "Sourav Ganguly",
    "Address": "100 Kolkata first st, India",
    "BankName": "IDBI Bank",
    "Cards":[{
      "CardNumber": "123456781004",
      "CardType": "Gold",
      "Score": "20"
    }, {
      "CardNumber": "123456781005",
      "CardType": "Silver",
      "Score": "10"
    }, {
      "CardNumber": "123456781006",
      "CardType": "Silver",
      "Score": "20"
    }]
   },
   {
    "UserName": "customer5",
    "CustomerId": "1005",
    "CustomerName": "Will Smith",
    "Address": "300 Las Vegas, USA",
    "BankName": "World Bank",
    "Cards":[{
      "CardNumber": "123456781005",
      "CardType": "Silver",
      "Score": "10"
    }]
   }
]`;

