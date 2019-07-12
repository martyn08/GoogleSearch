@GoogleSearch @test
Feature: Google Search
  As a web user
  I want to find information on google
  So that I get a better understanding of the topic

  Scenario: Search result page contains search query
    Given I am on google search page
    When I search for "Cucumber"
    Then the page title should contain "cucumber"

  Scenario: Google first result description contains searched query
    Given I am on google search page
    When I search for "Java"
    Then the first line on the result page should contain "Java"

  Scenario Outline: Withdraw money from account
    Given I have <balance> on my SAVINGS account
    When I <withdraw> from SAVINGS account
    Then i <receive> cash from the ATM

   Examples:
    | balance | withdraw| receive  |
    | 200     | 100     | 100      |
    | 50      | 50      | 0        |


  Scenario:  Validate Very login page
    Given I am on google search page
    And i navigate to "URL"
    When i enter "Email Address" and "Password" and "Postcode"
    Then i clicked on "Sign in"
    Then Show error message "Please enter a valid email address or account number"

  Scenario: Login page and shopping
    Given I am on google search page
    And i navigate to "URL" to search for online store
    When i click on "sign in" button
    When i enter valid "Email Address" and "Password"
    Then i clicked on "Sign in" button
    When i click on "T-shirt" section to view the product
    When i click on "Item" to select desired shirt
    And i click on "Add to cart" to add the item to basket
    And i click on "proceed to checkout" to exit the basket
    And i click on "proceed to checkout" to exit summary
    And i click on "proceed to checkout" to exit Address
    And i check the "Terms of Service" to accept condition
    And i click on "proceed to checkout" to exit Shipping
    Then "Payment page" is displayed
    When i click on "pay by check" button to make payment
    Then i click on "confirm my order" to complete the transaction











