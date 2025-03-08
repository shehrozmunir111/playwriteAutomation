Feature: Ecommerce validation

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
