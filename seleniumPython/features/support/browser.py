from selenium import webdriver
from selenium.webdriver.common.by import By
import os
import time

class Browsers():

    def browser_select(self, browser):
        if browser == 'firefox':
            baseUrl = "https://devexpress.github.io/testcafe/example/"
            driver = webdriver.Firefox(
                executable_path="/Users/aglass/aag/glassmation/seleniumPython/features/lib/geckodriver")
            driver.get(baseUrl)
            driver.maximize_window()
            driver.get("https://devexpress.github.io/testcafe/example/")
            return driver
        elif browser == 'chrome':
            driverLocation = "/Users/aglass/aag/glassmation/seleniumPython/features/lib/chromedriver"
            os.environ["webdriver.chrome.driver"] = driverLocation
            driver = webdriver.Chrome(driverLocation)
            time.sleep(2)
            return driver




