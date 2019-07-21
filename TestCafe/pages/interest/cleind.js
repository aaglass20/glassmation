import {Selector, t} from 'testcafe';

export default class Cle {
    constructor() {
        this.cleTitle = Selector('[class="card-title"]');
    }
}