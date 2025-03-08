Feature: Ecommerce validation

@Regression
  Scenario: Placing the order
    Given a login to the ecommerce website with "shehrozmunir111@gmail.com" and "Shehroz@123"
    When Add "Zara coat 3" to the cart
    Then Verify "Zara coat 3" is displayed in the cart
    When Enter valid details and place the order
    Then Verify the order is present in the orders history

# To run Tag, use below command
# npx cucumber-js --tags "@Regression"

@Validations
  Scenario Outline: Scenario Outline name: Error Validations
    Given a login to the ecommerce2 website with "<username>" and "<password>"
    Then Verify Error message is displayed

# Parameters
    Examples:
      | username | password |
      | shehrozmunir111@gmail.com | Shehroz@123 |
      | Hello@gmail.com | Hello@123 |

# To run Tag, use below command
# npx cucumber-js --tags "@Validations"

# To run parallel tests, use below command
# npx cucumber-js features/Ecommerce.feature --parallel 2 (2 means we have 2 scenarios to run in parallel)

# To run parallel files in cucumber, use tags
# npx cucumber-js --tags "@Validations"
# To generate html report, use below command
# npx cucumber-js features/Ecommerce.feature --parallel 2 --format html:cucumber-report/cucumber-report.html

# To generate json report, use below command
# npx cucumber-js features/Ecommerce.feature --parallel 2 --format json:cucumber-report/cucumber-report.json