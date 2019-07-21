import {Selector, t} from 'testcafe';

export default class Rad {
    constructor() {
        this.radTitle = Selector('[class="card-title"]');
    }
}