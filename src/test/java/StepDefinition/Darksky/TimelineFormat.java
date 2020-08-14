package StepDefinition.Darksky;


import Drivers.Web;
import Pages.Darksky.LandingPage;
import Utils.DateHelper;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


public class TimelineFormat {

    LandingPage landingPage = new LandingPage();

    @When("^I am on Darksky home page$")
    public void launchDarksky() {

        Web.initDriver("https://darksky.net/");

    }

    @When("^I verify timeline is displayed with (.*) hours increment$")
    public void verifyTimeline(int count) {

        List<String> timeline = landingPage.getTime();
        timeline.remove(0);

        List<String> time = new ArrayList<>(11);


        for(int i = 0; i < time.size(); i+=2) {
            time.add(DateHelper.getHourValueXHourFromNow(count + i));
        }

        for (int i = 0; i < timeline.size(); i++) {
            for (int j = 0; j < time.size(); j++) {

                    Assert.assertEquals(timeline.get(i), time.get(j), "The time is not the same");

            }
        }
    }
}