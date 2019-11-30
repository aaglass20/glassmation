package testobjects

import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

public class TestPageHome extends BaseTestObjects {
	static TestObject yourName = fromXPath('//input[@id="developer-name"]')
	static TestObject populateBtn = fromXPath('//input[@id="populate"]')
	static TestObject remoteTestingCb = fromXPath('//input[@id="remote-testing"]')
	static TestObject reusingJsCodeCb = fromXPath('//input[@id="reusing-js-code"]')
	static TestObject multipleBrowsersCb = fromXPath('//input[@id="background-parallel-testing"]')
	static TestObject integrationSystemCb = fromXPath('//input[@id="continuous-integration-embedding"]')
	static TestObject trafficMarkupCb = fromXPath('//input[@id="traffic-markup-analysis"]')
	static TestObject triedTC = fromXPath('//input[@id="tried-test-cafe"]')
	static TestObject windowsRdo = fromXPath('//input[@id="windows"]')
	static TestObject macOSRdo = fromXPath('//input[@id="macos"]')
	static TestObject linuxRdo = fromXPath('//input[@id="linux"]')
	static TestObject interfaceSelect = fromXPath('//select[@id="preferred-interface"]')
	static TestObject comments = fromXPath('//textarea[@id="comments"]')
	static TestObject submitBtn = fromXPath('//button[@id="submit-button"]')


	public static selectInterface(option) {
		WebUI.click(interfaceSelect)
		WebUI.click(fromXPath("//option[text()='${option}']"))
	}
}
