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

})