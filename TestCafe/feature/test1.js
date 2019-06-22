import {Selector, t} from "testcafe";
import examplePage from "../pages/examplePage"

const example = new examplePage();

fixture`Example #1`
    .page`https://devexpress.github.io/testcafe/example/`


test("Run you first test", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        Then name entered displays in the input box
    `;
    await t
        .typeText(example.youName, "Congrats")
        .wait(1000)
        .pressKey("ctrl+a delete")
        .typeText(example.youName, "You ran a test")
        .wait(1000)
        .pressKey("ctrl+a delete")
        .typeText(example.youName, "Click Resume")
        .debug()
});