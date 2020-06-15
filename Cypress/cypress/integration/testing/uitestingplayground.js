import {Navigation} from "../../helpers/navigation";
import {UitapPages} from "../../pages/uitap";

const nav = new Navigation()
const uitap = new UitapPages()

describe('UI Test Automation Playground', function () {

    it('Dynamic ID', function () {
        nav.uitapDynamic()
        uitap.verifyButtonExist()
        uitap.verifyButtonName('Button with Dynamic ID')
        uitap.clickButtonWithDynamicID()
    })

    it('Execute the test and make sure that click count is increasing by 2', function () {
        nav.uitapMouseOver()
        uitap.clickClickMe()
        uitap.clickClickMe()
        uitap.verifyClickCountIs("2")
    })

    it('Sample App Login - validate defaults', function () {
        nav.uitapSampleApp()
        uitap.validateUserNamePlaceholder('User Name')
        uitap.validatePasswordPlaceholder('********')
        uitap.validateLoginText('Log In')
        uitap.validateLabelText('User logged out.')
    })

    it('Sample App Login - error handling', function () {
        nav.uitapSampleApp()
        uitap.clickLogin()
        uitap.validateLabelText('Invalid username/password')
    })

    it('Sample App Login - Success', function () {
        nav.uitapSampleApp()
        uitap.enterUserName('Kenny Lofton')
        uitap.enterPassword('pwd')
        uitap.clickLogin()
        uitap.validateLabelText('Welcome, Kenny Lofton!')
    })

})