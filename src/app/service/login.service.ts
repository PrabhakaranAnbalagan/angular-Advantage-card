import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    validateUser(user: User): boolean {
        // tslint:disable-next-line: no-use-before-declare
        const usersObj = JSON.parse(users);
        for (const obj of usersObj) {
            if (obj.userName === user.userName &&
                obj.password === user.password) {
                return true;
            }
        }
        return false;
    }
}

// Mock Data
const users =
    `[
{"userName": "customer1", "password": "customer1"},
{"userName": "customer2", "password": "customer2"},
{"userName": "customer3", "password": "customer3"},
{"userName": "customer4", "password": "customer4"},
{"userName": "customer5", "password": "customer5"}
]`;
