package stepdefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import javax.xml.soap.Detail;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.testng.Assert.assertTrue;


public class GoogleSearchSteps {
    public static WebDriver driver;
    @Given("^I am on google search page$")
    public void i_am_on_google_search_page() throws Throwable {
        //System.out.println("step 1");

        System.setProperty("webdriver.chrome.driver", "C:\\Users\\BidemiAkinlade\\IdeaProjects\\GoogleSearch\\drivers\\chromedriver.exe");

        //System.setProperty("webdriver.firefox.marionette", "C:\\Users\\BidemiAkinlade\\IdeaProjects\\GoogleSearch\\drivers\\geckodriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.google.com/");

        //driver.close();
        //driver.quit();


    }

    @When("^I search for \"([^\"]*)\"$")
    public void i_search_for(String arg1) throws Throwable {
        WebElement element = driver.findElement(By.name("q"));
        element.sendKeys(arg1);
        element.submit();


    }

    @Then("^the page title should contain \"([^\"]*)\"$")
    public void the_page_title_should_contain(String arg1) throws Throwable {
        System.out.println(arg1);

    }

    @Then("^the first line on the result page should contain \"([^\"]*)\"$")
    public void the_first_line_on_the_result_page_should_contain(String arg1) throws Throwable {
        System.out.println(arg1);

    }

    @Given("^I have (\\d+) on my SAVINGS account$")
    public void i_have_on_my_SAVINGS_account(int arg1) throws Throwable {
        System.out.println(arg1);

    }

    @When("^I (\\d+) from SAVINGS account$")
    public void i_from_SAVINGS_account(int arg1) throws Throwable {
        System.out.println(arg1);
    }

    @Then("^i (\\d+) cash from the ATM$")
    public void i_cash_from_the_ATM(int arg1) throws Throwable {
        System.out.println(arg1);
    }

    @Given("^i navigate to \"([^\"]*)\"$")
    public void i_navigate_to(String arg1) throws Throwable {
        driver.get("https://www.very.co.uk/account/login.page?from=/account/myaccount/accountSummary.page&originalURL=https%3A//www.very.co.uk/account/myaccount/accountSummary.page&_requestid=742766");


    }

    @When("^i enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_and_and(String arg1, String arg2, String arg3) throws Throwable {
        driver.findElement(By.cssSelector("#loginID")).sendKeys("opensourcecms");
        driver.findElement(By.cssSelector("#loginPassword")).sendKeys(" opensourcecms");
        driver.findElement(By.cssSelector("#loginPostcode")).sendKeys(" cf13 0bd");
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }

    @Then("^i clicked on \"([^\"]*)\"$")
    public void i_clicked_on(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#existingCustomerSubmitButton")).click();

    }

    @Then("^Show error message \"([^\"]*)\"$")
    public void show_error_message(String arg1) throws Throwable {

        String actualString = driver.findElement(By.cssSelector("#errorList > li")).getText();
        assertTrue(actualString.contains(arg1));
    }


    @Given("^i navigate to \"([^\"]*)\" to search for online store$")
    public void i_navigate_to_to_search_for_online_store(String arg1) throws Throwable {
        driver.get("http://automationpractice.com/index.php");
    }

    @When("^i click on \"([^\"]*)\" button$")
    public void iClickOnButton(String arg0) throws Throwable {
        driver.findElement(By.cssSelector(" #header > div.nav > div > div > nav > div.header_user_info > a")).click();

    }

    @When("^i enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_valid_and(String arg1, String arg2) throws Throwable {
        driver.findElement(By.cssSelector("#email")).sendKeys("qaautomation05@gmail.com");
        driver.findElement(By.cssSelector("#passwd")).sendKeys("javaauto05A");
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }


    @Then("^i clicked on \"([^\"]*)\" button$")
    public void i_clicked_on_button(String arg1) throws Throwable {
        driver.findElement(By.cssSelector(" #SubmitLogin")).click();
    }

    @When("^i click on \"([^\"]*)\" section to view the product$")
    public void i_click_on_section_to_view_the_product(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#block_top_menu > ul > li:nth-child(3) > a")).click();
    }

    @When("^i click on \"([^\"]*)\" to select desired shirt$")
    public void i_click_on_to_select_desired_shirt(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#center_column > ul > li > div > div.left-block > div > a.product_img_link > img")).click();
    }

    @When("^i click on \"([^\"]*)\" to add the item to basket$")
    public void i_click_on_to_add_the_item_to_basket(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#add_to_cart > button")).click();
    }

    @When("^i click on \"([^\"]*)\" to exit the basket$")
    public void i_click_on_to_exit_the_basket(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a")).click();
    }

    @When("^i click on \"([^\"]*)\" to exit summary$")
    public void i_click_on_to_exit_summary(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium")).click();
    }

    @When("^i click on \"([^\"]*)\" to exit Address$")
    public void i_click_on_to_exit_Address(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#center_column > form > p > button")).click();
    }

    @When("^i check the \"([^\"]*)\" to accept condition$")
    public void i_check_the_to_accept_condition(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#cgv")).click();
    }

    @When("^i click on \"([^\"]*)\" to exit Shipping$")
    public void i_click_on_to_exit_Shipping(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#form > p > button")).click();
    }

    @Then("^\"([^\"]*)\" is displayed$")
    public void is_displayed(String arg1) throws Throwable {
        System.out.println(arg1);
    }

    @When("^i click on \"([^\"]*)\" button to make payment$")
    public void iClickOnButtonToMakePayment(String arg0) throws Throwable {
        driver.findElement(By.cssSelector("#HOOK_PAYMENT > div:nth-child(2) > div > p > a")).click();
    }


    @Then("^i click on \"([^\"]*)\" to complete the transaction$")
    public void iClickOnToCompleteTheTransaction(String arg0) throws Throwable {
        driver.findElement(By.cssSelector("#cart_navigation > button")).click();
    }


}
