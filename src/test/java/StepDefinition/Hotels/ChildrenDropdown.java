package StepDefinition.Hotels;

import Drivers.Web;
import Pages.Hotels.LandingPage;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class ChildrenDropdown {

    LandingPage landingPage = new LandingPage();
    String userChoise;

    @When("^I am on hotels landing page$")
    public void launchHotels() {

        Web.initDriver("https://www.hotels.com/");
    }

    @When("^I select (.*) in children dropdown$")
    public void selectNumOfChildren(String numberOfChildren) {

        userChoise = numberOfChildren;

        landingPage.selectChildrenFromDropdown(numberOfChildren);
    }

    @When("^I see (.*) child age dropdowns$")
    public void verifyChildrenCount(String childAgeDropdown) {

        Assert.assertEquals(userChoise, Integer.toString(landingPage.ageChildrenButton()), "The number is not the same");

    }
}
