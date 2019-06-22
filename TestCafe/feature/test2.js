import {Selector, t} from "testcafe";
import examplePage from "../pages/examplePage"

const example = new examplePage();

fixture`Example #2`
    .page`https://devexpress.github.io/testcafe/example/`


test("Skip the failed test", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        Then name entered displays in the input box
    `;
    await t
        .typeText(example.youName, "Please Skip Me")
});

test("Fix Me!!!!", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        Then name entered displays in the input box
    `;
    await t
        .typeText(example.youName, "I am so broken")
        .expect(example.youName.value).contains('I am so fixed')
});

