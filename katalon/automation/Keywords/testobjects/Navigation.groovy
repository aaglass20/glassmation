package testobjects

import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI



public class Navigation extends BaseTestObjects {

	public static gotoTestCafePage() {
		String url = "https://devexpress.github.io/testcafe/example/";
		WebUI.openBrowser(url)
	}

	public static gotoGlassmationPage() {
		String url = "https://aaglass20.github.io/";
		WebUI.navigateToUrl(url)
	}
}
