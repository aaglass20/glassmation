import {Selector, t, ClientFunction} from "testcafe";
import {GLASSMATION_BASE_URL} from "../support/utlis"
import faker from "faker"
import glassmationExample from "../pages/glassmationExample";
import Rad from "../pages/interest/rad";
import Smash from "../pages/interest/smash";
import Cle from "../pages/interest/cleind";

const glass = new glassmationExample()
const rad = new Rad()
const smash = new Smash()
const cle = new Cle()

const getPageUrl = ClientFunction(() => window.location.href);

fixture`TestCafe Glassmation`
    .page(`${GLASSMATION_BASE_URL}`);


test("Select More Info button in grid for specific row", async t => {
    `
        Given I am on the Glassmation example page
        When I select More Info for a specific interest
        Then I access more information for the selected interest
    `;
    await glass.selectInterest('RAD');
    await t
        .expect(rad.radTitle.innerText).contains('Rad');
});

test("Validate external site", async t => {
    `
        Given I am on the Glassmation example page
        When I select More Info for a specific interest
        Then I access more information for the selected interest
        When I select link to external URL
        Then I validate URL
    `;
    await glass.selectInterest('Smash Bros');
    await t
        .expect(smash.smashTitle.innerText).contains('Super Smash Bros.')
        .click(smash.smashButton)
        .expect(getPageUrl()).contains('smashbros');
});

test("Select Grid Row", async t => {
    `
        Given I am on the Glassmation example page
        When I select More Info for a specific interest
        Then I access more information for the selected interest
    `;
    await glass.selectInterest('Cleveland Indians');
    await t
        .expect(cle.cleTitle.innerText).contains('Cleveland Indians');
});