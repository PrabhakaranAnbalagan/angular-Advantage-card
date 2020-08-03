import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { ICustomer } from 'src/app/model/ICustomer';
import { Icard } from 'src/app/model/Icard';
import { Router } from '@angular/router';

@Component({
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    userName: string;
    customer: ICustomer;
    advantageCard: Icard;
    otherCards: Icard[] = [];


    constructor(private route: ActivatedRoute, private service: CardService, private router: Router) { }

    ngOnInit() {
        this.userName = this.route.snapshot.paramMap.get('userName');
        this.customer = this.service.getCustomers(this.userName);
        this.reOrderCards(this.customer.Cards);
    }

    pay() {
        this.router.navigate(['/success']);
        /// window.alert('Payment Successful!!!');
    }

    reOrderCards(cards: Icard[]) {
        const groupCardByType = cards.reduce((r, a) => {
            r[a.CardType] = [...r[a.CardType] || [], a];
            return r;
        }, {});

        // tslint:disable-next-line: forin
        for (const key in groupCardByType) {
            const cardVal = groupCardByType[key];
            switch (key) {
                case 'Platinum':
                    this.addCard(cardVal);
                    break;
                case 'Gold':
                    this.addCard(cardVal);
                    break;
                default:
                    this.addCard(cardVal);
                    break;
            }
        }
    }

    addCard(cards: Icard[]) {
        if (cards.length > 1) {
            const maxScore = Math.max.apply(Math, cards.map(card => +card.Score));
            for (const item of cards) {
                if (+item.Score === maxScore &&
                    (this.advantageCard === null || this.advantageCard === undefined)) {
                    this.advantageCard = item;
                } else {
                    this.otherCards.push(item);
                }
            }
        } else {
            if (this.advantageCard === null || this.advantageCard === undefined) {
                this.advantageCard = cards[0];
            } else {
                this.otherCards.push(cards[0]);
            }
        }
    }
}
