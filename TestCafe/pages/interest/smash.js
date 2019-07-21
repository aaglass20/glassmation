import {Selector, t} from 'testcafe';

export default class Smash {
    constructor() {
        this.smashTitle = Selector('[class="card-title"]');
        this.smashButton = Selector('[class="btn btn-primary"]')
    }
}