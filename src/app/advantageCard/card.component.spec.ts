import { CardComponent } from './card.component';
import { ICustomer } from 'src/app/model/ICustomer';
import { of } from 'rxjs/internal/observable/of';
import { ActivatedRoute, Router } from '@angular/router';
import { } from 'jasmine';
import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { CardService } from 'src/app/service/card.service';
import { Observable } from 'rxjs';

class MockMyService {
    public data: ICustomer;
    public getCustomers(): ICustomer {
      this.data = {
        UserName: 'customer2',
        CustomerId: '1002',
        CustomerName: 'David Warner',
        Address: '11A temple tower, Austrlia',
        BankName: 'HDFC Bank',
        Cards: [{
            CardNumber: '123456781001',
            CardType: 'Platinum',
            Score: '10'
        }, {
            CardNumber: '123456781002',
            CardType: 'Platinum',
            Score: '20'
        }, {
            CardNumber: '123456781003',
            CardType: 'Gold',
            Score: '10'
        }, {
            CardNumber: '123456781004',
            CardType: 'Gold',
            Score: '20'
        }, {
            CardNumber: '123456781005',
            CardType: 'Silver',
            Score: '10'
        }, {
            CardNumber: '123456781006',
            CardType: 'Silver',
            Score: '20'
        }]
    };
      return (this.data);
    }
  }

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;
    let dataService: CardService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CardComponent],
            providers: [
                {
                    provide: CardService,
                    useClass : MockMyService
                },
                {
                    provide: Router,
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: {
                                get: () => 'customer2',
                            },
                        },
                    }
                }
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        dataService = TestBed.get(CardService);
        fixture.detectChanges();
    });

    it('should return correct userName when set from Active Route', () => {
        const userName = 'customer2';

        component.userName = userName;

        expect(component.userName).toEqual('customer2');
    });

    it('should return Incorrect  userName when set from Active Route', () => {
        const userName = 'customer2';

        component.userName = userName;

        expect(component.userName).not.toEqual('customer3');
    });

    it('should return correct customer details when getCustomers is called in ngOnInit Method', () => {

        component.ngOnInit();

        expect(component.customer).not.toEqual(null);
        expect(dataService.getCustomers).not.toEqual(null);
    });

    it('should return only one Advantage card after ngOnInit Method', () => {

        component.ngOnInit();

        expect(component.advantageCard).not.toEqual(null);
        expect(component.advantageCard.Score).toEqual('20');
        expect(component.advantageCard.CardType).toEqual('Platinum');
    });

    it('should return mutiple other cards after ngOnInit Method', () => {

        component.ngOnInit();

        expect(component.otherCards).not.toEqual(null);
        expect(component.otherCards[0].CardType).toEqual('Platinum');
    });
});
