from selenium import webdriver
from selenium.webdriver.common.by import By
from hamcrest import *
import time

from support.browser import Browsers


class example_page():

    def populate_name(context):
        context.browser = Browsers()
        driver = context.browser.browser_select('firefox')

        driver.find_element(By.XPATH, "//input[@id='developer-name']").send_keys("first")
        driver.find_element(By.ID, "developer-name").send_keys(" test")
        driver.find_element(By.ID, "reusing-js-code").click()
        driver.find_element(By.XPATH, "//input[@id='continuous-integration-embedding']").click()

        verifyText = driver.find_element(By.ID, "developer-name")
        elementText = verifyText.get_attribute("value")
        print("Text on element is" + elementText)

        assert_that(elementText, equal_to("first test"))

        time.sleep(2)
        driver.quit()

    def check_box(context):
        context.browser = Browsers()
        driver = context.browser.browser_select('firefox')
        driver.find_element(By.ID, "reusing-js-code").click()
        driver.find_element(By.XPATH, "//input[@id='continuous-integration-embedding']").click()

        print("Second Text on element is")

        time.sleep(2)
        driver.quit()


run_test = example_page()
run_test.populate_name()
run_test.check_box()