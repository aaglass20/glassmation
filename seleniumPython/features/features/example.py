from selenium import webdriver
from selenium.webdriver.common.by import By
from hamcrest import *
import time

from support.browser import Browsers

class example_page():

    def enter_and_validate_text_input_xpath(context):
        # Scenario: Enter and validate text input
        # Given I am on the TestCafe example homepage
        # When enter a name for 'Your Name'
        # Then name entered displays in the input box
        context.browser = Browsers()
        driver = context.browser.browser_select('firefox')
        driver.find_element(By.XPATH, "//input[@id='developer-name']").send_keys("John Smith")
        verifyText = driver.find_element(By.XPATH, "//input[@id='developer-name']")
        elementText = verifyText.get_attribute("value")
        print("Text on element is " + elementText)
        assert_that(elementText, equal_to("John Smith"))
        time.sleep(2)
        driver.quit()

    def enter_and_validate_text_input(context):
        # Scenario: Enter and validate text input
        # Given I am on the TestCafe example homepage
        # When enter a name for 'Your Name'
        # Then name entered displays in the input box
        context.browser = Browsers()
        driver = context.browser.browser_select('firefox')
        driver.find_element(By.ID, "developer-name").send_keys("Mike Smith")
        verifyText = driver.find_element(By.ID, "developer-name")
        elementText = verifyText.get_attribute("value")
        print("Text on element is " + elementText)
        assert_that(elementText, equal_to("Mike Smith"))
        time.sleep(2)
        driver.quit()

run_test = example_page()
run_test.enter_and_validate_text_input_xpath()
run_test.enter_and_validate_text_input()
