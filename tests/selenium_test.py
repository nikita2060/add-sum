from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
try:
    driver.get("http://localhost:5173")
    input_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "input"))
    )
    input_element.send_keys("1,2,3")
    driver.find_element(By.ID,"sum").click()
    result = WebDriverWait(driver,10).until(
        EC.visibility_of_element_located((By.ID,"result"))
    )
    print("Result:", result.text)
    assert result.text =="Result: 6","Sum is incorrect"
except Exception as e:
    print("Error:", e)
finally:
    driver.quit()