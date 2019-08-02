$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("googleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Google Search",
  "description": "As a web user\r\nI want to find information on google\r\nSo that I get a better understanding of the topic",
  "id": "google-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleSearch"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Search result page contains search query",
  "description": "",
  "id": "google-search;search-result-page-contains-search-query",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for \"Cucumber\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the page title should contain \"cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 3857033143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 14
    }
  ],
  "location": "GoogleSearchSteps.i_search_for(String)"
});
formatter.result({
  "duration": 1858567204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber",
      "offset": 31
    }
  ],
  "location": "GoogleSearchSteps.the_page_title_should_contain(String)"
});
formatter.result({
  "duration": 284606,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Google first result description contains searched query",
  "description": "",
  "id": "google-search;google-first-result-description-contains-searched-query",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I search for \"Java\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the first line on the result page should contain \"Java\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 3403613287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 14
    }
  ],
  "location": "GoogleSearchSteps.i_search_for(String)"
});
formatter.result({
  "duration": 1784658320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 50
    }
  ],
  "location": "GoogleSearchSteps.the_first_line_on_the_result_page_should_contain(String)"
});
formatter.result({
  "duration": 95031,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Withdraw money from account",
  "description": "",
  "id": "google-search;withdraw-money-from-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I have \u003cbalance\u003e on my SAVINGS account",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I \u003cwithdraw\u003e from SAVINGS account",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "i \u003creceive\u003e cash from the ATM",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "google-search;withdraw-money-from-account;",
  "rows": [
    {
      "cells": [
        "balance",
        "withdraw",
        "receive"
      ],
      "line": 23,
      "id": "google-search;withdraw-money-from-account;;1"
    },
    {
      "cells": [
        "200",
        "100",
        "100"
      ],
      "line": 24,
      "id": "google-search;withdraw-money-from-account;;2"
    },
    {
      "cells": [
        "50",
        "50",
        "0"
      ],
      "line": 25,
      "id": "google-search;withdraw-money-from-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Withdraw money from account",
  "description": "",
  "id": "google-search;withdraw-money-from-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleSearch"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I have 200 on my SAVINGS account",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I 100 from SAVINGS account",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "i 100 cash from the ATM",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "GoogleSearchSteps.i_have_on_my_SAVINGS_account(int)"
});
formatter.result({
  "duration": 839758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 2
    }
  ],
  "location": "GoogleSearchSteps.i_from_SAVINGS_account(int)"
});
formatter.result({
  "duration": 151757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 2
    }
  ],
  "location": "GoogleSearchSteps.i_cash_from_the_ATM(int)"
});
formatter.result({
  "duration": 140121,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Withdraw money from account",
  "description": "",
  "id": "google-search;withdraw-money-from-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleSearch"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I have 50 on my SAVINGS account",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I 50 from SAVINGS account",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "i 0 cash from the ATM",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 7
    }
  ],
  "location": "GoogleSearchSteps.i_have_on_my_SAVINGS_account(int)"
});
formatter.result({
  "duration": 126061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 2
    }
  ],
  "location": "GoogleSearchSteps.i_from_SAVINGS_account(int)"
});
formatter.result({
  "duration": 75152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 2
    }
  ],
  "location": "GoogleSearchSteps.i_cash_from_the_ATM(int)"
});
formatter.result({
  "duration": 73212,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validate Very login page",
  "description": "",
  "id": "google-search;validate-very-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I am on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "i navigate to \"URL\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i enter \"Email Address\" and \"Password\" and \"Postcode\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "i clicked on \"Sign in\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Show error message \"Please enter a valid email address or account number\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 3450026400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 15
    }
  ],
  "location": "GoogleSearchSteps.i_navigate_to(String)"
});
formatter.result({
  "duration": 4335248163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email Address",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 29
    },
    {
      "val": "Postcode",
      "offset": 44
    }
  ],
  "location": "GoogleSearchSteps.i_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 638915704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 14
    }
  ],
  "location": "GoogleSearchSteps.i_clicked_on(String)"
});
formatter.result({
  "duration": 100611442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address or account number",
      "offset": 20
    }
  ],
  "location": "GoogleSearchSteps.show_error_message(String)"
});
formatter.result({
  "duration": 58958089,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Login page and shopping",
  "description": "",
  "id": "google-search;login-page-and-shopping",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I am on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "i navigate to \"URL\" to search for online store",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "i click on \"sign in\" button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "i enter valid \"Email Address\" and \"Password\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "i clicked on \"Sign in\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "i click on \"T-shirt\" section to view the product",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "i click on \"Item\" to select desired shirt",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "i click on \"Add to cart\" to add the item to basket",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "i click on \"proceed to checkout\" to exit the basket",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "i click on \"proceed to checkout\" to exit summary",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "i click on \"proceed to checkout\" to exit Address",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "i check the \"Terms of Service\" to accept condition",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "i click on \"proceed to checkout\" to exit Shipping",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "\"Payment page\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "i click on \"pay by check\" button to make payment",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "i click on \"confirm my order\" to complete the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 3459704950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 15
    }
  ],
  "location": "GoogleSearchSteps.i_navigate_to_to_search_for_online_store(String)"
});
formatter.result({
  "duration": 5987653327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.iClickOnButton(String)"
});
formatter.result({
  "duration": 3591568287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email Address",
      "offset": 15
    },
    {
      "val": "Password",
      "offset": 35
    }
  ],
  "location": "GoogleSearchSteps.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 468809925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 14
    }
  ],
  "location": "GoogleSearchSteps.i_clicked_on_button(String)"
});
formatter.result({
  "duration": 1836655920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T-shirt",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.i_click_on_section_to_view_the_product(String)"
});
formatter.result({
  "duration": 2069530216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.i_click_on_to_select_desired_shirt(String)"
});
formatter.result({
  "duration": 1838940043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add to cart",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.i_click_on_to_add_the_item_to_basket(String)"
});
formatter.result({
  "duration": 135953036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.i_click_on_to_exit_the_basket(String)"
});
formatter.result({
  "duration": 2167329536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.i_click_on_to_exit_summary(String)"
});
formatter.result({
  "duration": 1073529248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.i_click_on_to_exit_Address(String)"
});
formatter.result({
  "duration": 1936207969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Terms of Service",
      "offset": 13
    }
  ],
  "location": "GoogleSearchSteps.i_check_the_to_accept_condition(String)"
});
formatter.result({
  "duration": 119710604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.i_click_on_to_exit_Shipping(String)"
});
formatter.result({
  "duration": 1902858134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment page",
      "offset": 1
    }
  ],
  "location": "GoogleSearchSteps.is_displayed(String)"
});
formatter.result({
  "duration": 151273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pay by check",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.iClickOnButtonToMakePayment(String)"
});
formatter.result({
  "duration": 1522327526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "confirm my order",
      "offset": 12
    }
  ],
  "location": "GoogleSearchSteps.iClickOnToCompleteTheTransaction(String)"
});
formatter.result({
  "duration": 2266331765,
  "status": "passed"
});
});