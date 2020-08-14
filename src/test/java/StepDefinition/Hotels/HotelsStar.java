package StepDefinition.Hotels;

import Drivers.Web;
import Pages.Hotels.LandingPage;
import Pages.Hotels.SearchResultPage;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.List;

public class HotelsStar {

    LandingPage landingPage = new LandingPage();
    SearchResultPage searchResultPage = new SearchResultPage();
    String userChoise;

    @When("^I am on landing page$")
    public void launchHotels() {

        Web.initDriver("https://www.hotels.com/");
    }

    @When("^I enter (.*) in search$")
    public void enterUserDestination(String destination) {

        landingPage.enterDestination(destination);
    }

    @When("^I select (.*) from autosuggestion$")
    public void selectFromAutosuggestion(String userPreference) {

        landingPage.selectDestFromAutoSuggestions(userPreference);

    }

    @When("^I click on Search button$")
    public void clickSearch() {

        landingPage.clickSearchButton();
    }

    @When("^I click on (.*) star$")
    public void clickStar(String star) {
        searchResultPage.scrollToCheckBoxStarRating();

        //userChoise = star;

        searchResultPage.clickTheStar(star);

    }

    @When("^I verify hotels are (.*) star rating$")
    public void verifyStarRating(String star) {
        //userChoise = star;
        searchResultPage.scrollToInfo();

        for (String hStar : searchResultPage.getHotelsStar()) {

            String s = hStar.substring(0,1);

            Assert.assertEquals(s, star, "The star of the hotel is not the same");
        }
    }
    @When("^I am on default locations search result screen$")
    public void launchHotelsSearchResult() {

        Web.initDriver("https://www.hotels.com/search.do?resolved-location=CITY%3A1504033%3AUNKNOWN%3AUNKNOWN&destination-id=1504033&q-destination=Las%20Vegas,%20Nevada,%20United%20States%20of%20America&q-check-in=2020-08-05&q-check-out=2020-08-06&q-rooms=1&q-room-0-adults=2&q-room-0-children=6&q-room-0-child-0-age=10&q-room-0-child-1-age=10&q-room-0-child-2-age=10&q-room-0-child-3-age=10&q-room-0-child-4-age=10&q-room-0-child-5-age=10");

        Assert.assertEquals(Web.getDriver().getTitle(), "");
    }
}
