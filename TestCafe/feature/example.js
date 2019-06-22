import {Selector, t} from "testcafe";
import examplePage from "../pages/examplePage"
import thankYou from "../pages/thankYou";

const example = new examplePage();
const thanks = new thankYou();


fixture`TestCafe examplest`
    .page`https://devexpress.github.io/testcafe/example/`


test("Enter and validate text input", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        Then name entered displays in the input box
    `;
    await t
        .typeText(example.youName, "John Smith")
        .expect(example.youName.value).contains('John Smith')
});


test.meta('Critical', '1')("Confirmation modal - OK", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        And I click and confirm 'Populate' button
        Then the populated name displays
    `;
    await t
        .typeText(example.youName, "John Smith")
        .setNativeDialogHandler(() => true)
        .click(example.populateButton)
        .expect(example.youName.value).contains('Peter Parker')
});


test("Confirmation modal - Cancel", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        And I click and cancel 'Populate' button
        Then the user entered name displays
    `;
    await t
        .typeText(example.youName, "John Smith")
        .setNativeDialogHandler(() => false)
        .click(example.populateButton)
        .expect(example.youName.value).contains('John Smith')
});


test.meta('Critical', '2')("Validate selected and unselected checkbox input elements", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When I select checkbox input elements
        Then I validate selected and unselected checkbox input elements
    `;
    await t
        .click(example.remoteTesting)
        .click(example.triedTestCafe)
        .expect(example.remoteTesting.checked).ok()
        .expect(example.reusingJsCode.checked).notOk()
        .expect(example.backgroundParallelTesting.checked).notOk()
        .expect(example.continuousIntegrationEmbedding.checked).notOk()
        .expect(example.trafficMarkupAnalysis.checked).notOk()
        .expect(example.triedTestCafe.checked).ok()
        .click(example.reusingJsCode)
        .expect(example.reusingJsCode.checked).ok()
});


test.meta('Critical', '2')("Validate selected and unselected radio input elements", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When I select radio elements
        Then validate selected and unselected radio input elements
    `;
    await t
        .click(example.windows)
        .expect(example.windows.checked).ok()
        .expect(example.macOs.checked).notOk()
        .expect(example.linux.checked).notOk()
        .click(example.macOs)
        .expect(example.windows.checked).notOk()
        .expect(example.macOs.checked).ok()
        .expect(example.linux.checked).notOk()
        .click(example.linux)
        .expect(example.windows.checked).notOk()
        .expect(example.macOs.checked).notOk()
        .expect(example.linux.checked).ok()

});


test("Validate select list element selection", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When select a value from 'Which TestCafe interface do you use:' 
        Then validate value selected
    `;
    await example.selectInterface("JavaScript API");
    await t.expect(example.preferredInterface.value).contains("JavaScript API")
    await example.selectInterface("Command Line");
    await t.expect(example.preferredInterface.value).contains("Command Line")
    await example.selectInterface("Both");
    await t.expect(example.preferredInterface.value).contains("Both")
});


test("Drag slider value", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When select checkbox elements
        Then validate checked and unchecked elements
    `;
    await t
        .click(example.triedTestCafe)
        .drag(example.sliderHandle, 710, 0, {offsetX: 10, offsetY: 10})
//slider bar is 815 pixels wide. 90 pixels will move from 1 to 2. 710 will move to postion 7
});


test("Enter and validate textarea entry", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When select 'I have tried TestCafe'
        And enter comments for 'Please let us know what you think:'
        Then I validate the value entered in textarea
    `;
    await t
        .click(example.triedTestCafe)
        .typeText(example.comments, "This is a very nice product")
        .expect(example.comments.value).contains("This is a very nice product")
});


test("Submit form and validate confirm page", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        And I click the 'Submit' button
        Then confirmation message displays
    `;
    await t
        .typeText(example.youName, "John Smith")
        .click(example.submitButton)
        .expect(thanks.confirmation.innerText).contains('Thank you, John Smith!')
});


