package testobjects

import com.kms.katalon.core.testobject.SelectorMethod
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.testobject.ConditionType


public class BaseTestObjects {

	static TestObject fromXPath(String xpath, TestObject parent = null) {
		TestObject to = new TestObject(xpath);
		to.setSelectorValue(SelectorMethod.XPATH, xpath)
		to.setSelectorMethod(SelectorMethod.XPATH)

		if(parent != null) to.setParentObject(parent)

		return to
	}
	
	static TestObject fromCSS(String css) {
		TestObject to = new TestObject(css);
		to.setSelectorValue(SelectorMethod.CSS, css)
		to.setSelectorMethod(SelectorMethod.CSS)

		return to
	}

}