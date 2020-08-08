package StepDefinition.Darksky;


import Drivers.Web;
import Pages.Darksky.LandingPage;
import Utils.DateHelper;
import cucumber.api.java.en.When;
import org.testng.Assert;
import java.util.List;


public class TimelineFormat {

    LandingPage landingPage = new LandingPage();

    @When("^I am on Darksky home page$")
    public void launchDarksky() {

        Web.initDriver("https://darksky.net/");

    }

    @When("^I verify timeline is displayed with 2 hours increment$")
    public void verifyTimeline() {

        List<String> timeline = landingPage.getTime();
        timeline.remove(0);


        for (String time : timeline) {

        }
    }
}