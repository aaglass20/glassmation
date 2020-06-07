import {TestExamplesPage} from "../../pages/testPage";
import {GMFaker} from "../../helpers/gmFaker";
import {Navigation} from "../../helpers/navigation";

const testPage = new TestExamplesPage
const nav = new Navigation()
const name = new GMFaker().gmFullName()

describe('Cypress Examples using Page Object', function () {

    it('Enter and validate text input', function () {
        nav.home()
        testPage.enterName(name)
        testPage.validateNameEntered(name)
    })

    it('Confirmation modal - Confirm', function () {
        nav.home()
        testPage.clickPopulateButton()
        testPage.validateNameEntered("Peter Parker")
    })

})

