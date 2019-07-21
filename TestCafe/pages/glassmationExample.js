import {Selector, t} from 'testcafe';

export default class glassmationExample {
    constructor() {
        this.interestTable = Selector('[id="interestTable"]');
        this.interest = Selector('[class="interest"]');
        this.moreInfo = Selector('[class="moreInfo"]');
    }

    async selectInterest(interestName) {
        await t
            .click(Selector(this.interest).withText(interestName).parent('tr').find('td[class="moreInfo"]'))
    }
}
