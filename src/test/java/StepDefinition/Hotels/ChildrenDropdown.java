package StepDefinition.Hotels;

import Drivers.Web;
import Pages.Hotels.LandingPage;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class ChildrenDropdown {

    LandingPage landingPage = new LandingPage();

    @When("^I am on hotels landing page$")
    public void launchHotels() {

        Web.initDriver("https://www.hotels.com/");
        Assert.assertEquals(Web.getDriver().getTitle(), "");
    }

    @When("^I select (.*) in children dropdown$")
    public void selectNumOfChildren(String numberOfChildren) {

        landingPage.selectChildrenFromDropdown(numberOfChildren);
    }

    @When("^I see (.*) child age dropdowns$")
    public void verifyChildrenCount(String childAgeDropdown) {

        Assert.assertEquals(Integer.toString(landingPage.ageChildrenButton()), childAgeDropdown, "The number is not the same");

    }
}
