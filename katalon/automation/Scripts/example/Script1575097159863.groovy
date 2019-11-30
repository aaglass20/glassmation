
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import testobjects.TestPageHome
import testobjects.Navigation as Navigation
import testobjects.ThankYou as ThankYou

String name = 'Joe Tester'
String secondName = 'Jose Tester'
String enterComment = 'This is a great Product'
String message = 'Thank you, Jose Tester!'

//Naviage to Test Page
Navigation.gotoTestCafePage()

//Scenario: Enter and validate text input
//	Given I am on the TestCafe example homepage
//	When enter a name for 'Your Name'
//	Then name entered displays in the input box
WebUI.setText(TestPageHome.yourName, name)
WebUI.verifyElementAttributeValue(TestPageHome.yourName, 'value', name, 1)

//Scenario: Confirmation modal - OK
//	Given I am on the TestCafe example homepage
//	When enter a name for 'Your Name'
//	And I click and confirm 'Populate' button
//	Then the populated name displays
WebUI.setText(TestPageHome.yourName, name)
WebUI.click(TestPageHome.populateBtn)
WebUI.acceptAlert()
WebUI.verifyElementAttributeValue(TestPageHome.yourName, 'value', "Peter Parker", 1)

//Scenario: Confirmation modal - Cancel
//	Given I am on the TestCafe example homepage
//	When enter a name for 'Your Name'
//  And I click and cancel 'Populate' button
//  Then the user entered name displays
WebUI.setText(TestPageHome.yourName, name)
WebUI.click(TestPageHome.populateBtn)
WebUI.dismissAlert()
WebUI.verifyElementAttributeValue(TestPageHome.yourName, 'value', name, 1)

//Scenario: Validate selected and unselected checkbox input elements
//	Given I am on the TestCafe example homepage
//	When I select checkbox input elements
//	Then I validate selected and unselected checkbox input elements

WebUI.check(TestPageHome.remoteTestingCb)
WebUI.check(TestPageHome.triedTC)
WebUI.verifyElementChecked(TestPageHome.remoteTestingCb, 1)
WebUI.verifyElementNotChecked(TestPageHome.reusingJsCodeCb, 1)
WebUI.verifyElementNotChecked(TestPageHome.multipleBrowsersCb, 1)
WebUI.verifyElementNotChecked(TestPageHome.integrationSystemCb, 1)
WebUI.verifyElementNotChecked(TestPageHome.trafficMarkupCb, 1)
WebUI.verifyElementChecked(TestPageHome.triedTC, 1)
WebUI.uncheck(TestPageHome.remoteTestingCb)
WebUI.check(TestPageHome.trafficMarkupCb)
WebUI.verifyElementNotChecked(TestPageHome.remoteTestingCb, 1)
WebUI.verifyElementChecked(TestPageHome.triedTC, 1)
WebUI.verifyElementNotChecked(TestPageHome.reusingJsCodeCb, 1)
WebUI.verifyElementNotChecked(TestPageHome.multipleBrowsersCb, 1)
WebUI.verifyElementNotChecked(TestPageHome.integrationSystemCb, 1)
WebUI.verifyElementChecked(TestPageHome.trafficMarkupCb, 1)

//Scenario: Validate selected and unselected radio input elements
//	Given I am on the TestCafe example homepage
//	When I select radio elements
//	Then validate selected and unselected radio input elements
WebUI.check(TestPageHome.windowsRdo)
WebUI.verifyElementAttributeValue(TestPageHome.windowsRdo, 'checked', "true", 1)
WebUI.check(TestPageHome.macOSRdo)
WebUI.verifyElementAttributeValue(TestPageHome.macOSRdo, 'checked', "true", 1)
WebUI.check(TestPageHome.linuxRdo)
WebUI.verifyElementAttributeValue(TestPageHome.linuxRdo, 'checked', "true", 1)

//Scenario: Validate select list element selection
//	Given I am on the TestCafe example homepage
//	When select a value from 'Which TestCafe interface do you use:'
//	Then validate value selected
TestPageHome.selectInterface("Both")
WebUI.verifyElementAttributeValue(TestPageHome.interfaceSelect, 'value', "Both", 1)
TestPageHome.selectInterface("JavaScript API")
WebUI.verifyElementAttributeValue(TestPageHome.interfaceSelect, 'value', "JavaScript API", 1)
TestPageHome.selectInterface("Command Line")
WebUI.verifyElementAttributeValue(TestPageHome.interfaceSelect, 'value', "Command Line", 1)

//Scenario: Enter and validate textarea entry
//	Given I am on the TestCafe example homepage
//	When I select 'I have tried TestCafe'
//	And enter comments for 'Please let us know what you think:'
//	Then I validate the value entered in textarea
if(WebUI.getAttribute((TestPageHome.triedTC), 'checked') == 'false' ) {
	WebUI.uncheck(TestPageHome.triedTC)
}
WebUI.check(TestPageHome.triedTC)
WebUI.setText(TestPageHome.comments, enterComment)
WebUI.verifyElementAttributeValue(TestPageHome.comments, 'value', enterComment, 1)

//Scenario: Submit form and validate confirm page
//	Given I am on the TestCafe example homepage
//	When enter a name for 'Your Name'
//	And I click the 'Submit' button
//	Then confirmation message displays
WebUI.setText(TestPageHome.yourName, secondName)
WebUI.click(TestPageHome.submitBtn)
confirmMessage = WebUI.getText(ThankYou.message)
WebUI.verifyEqual(message, confirmMessage)

//Scenario: Navigate to page
Navigation.gotoGlassmationPage()
url = WebUI.getUrl()
WebUI.verifyEqual(url, "https://aaglass20.github.io/")

//Close browser
WebUI.closeBrowser()







