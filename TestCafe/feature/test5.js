import {Selector, t} from "testcafe";
import test5Page from "../pages/test5Page"


const testPage = new test5Page();


fixture`TestCafe examplest`
    .page`https://devexpress.github.io/testcafe/example/`


test("Enter and validate text input", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        Then name entered displays in the input box
    `;
    await t
        .typeText(testPage.youName, "John Smith")
        .expect(testPage.youName.value).contains('John Smith')
});


test("Confirmation modal - OK", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        And I click and confirm 'Populate' button
        Then the populated name displays
    `;
    await t
    //testcode
});


test("Confirmation modal - Cancel", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        And I click and cancel 'Populate' button
        Then the user entered name displays
    `;
    await t
    //testcode
});


test("Validate selected and unselected checkbox input elements", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When I select checkbox input elements
        Then I validate selected and unselected checkbox input elements
    `;
    await t
    //testcode
});


test("Validate selected and unselected radio input elements", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When I select radio elements
        Then validate selected and unselected radio input elements
    `;
    await t
    //testcode

});


test("Validate select list element selection", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When select a value from 'Which TestCafe interface do you use:' 
        Then validate value selected
    `;
    //testcode
});


test("Drag slider value", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When select checkbox elements
        Then validate checked and unchecked elements
    `;
    await t
    //testcode
});


test("Enter and validate textarea entry", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When select 'I have tried TestCafe'
        And enter comments for 'Please let us know what you think:'
        Then I validate the value entered in textarea
    `;
    await t
    //testcode
});


test("Submit form and validate confirm page", async t => {
    Description: `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        And I click the 'Submit' button
        Then confirmation message displays
    `;
    await t
    //testcode
});



