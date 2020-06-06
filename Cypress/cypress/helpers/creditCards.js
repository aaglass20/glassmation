export class CreditCards {

    creditCards(card) {
        
        switch (card) {
            case 'Mastercard':
                return '5555555555554444'
            case 'MastercardDebit':
                return '5200828282828210'
            case 'MastercardPrePaid':
                return '5105105105105100'
            case 'Visa':
                return '4242424242424242'
            case 'VisaDebit':
                return '5200828282828210'
            case 'Discover':
                return '6011111111111117'
            case 'AmericanExpress':
                return '378282246310005'
            case 'DinersClub':
                return '378282246310005'
            case 'DinersClub14':
                return '36227206271667'
            case 'JCB':
                return '3566002020360505'
            case 'UnionPay':
                return '6200000000000005'
        }
    }

}



