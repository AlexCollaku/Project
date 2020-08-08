package Pages.Darksky;

import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class LandingPage extends BasePage {

    By nowLocator = By.xpath("//div[@class='hours']//span[@class='Now']");
    By timelineFormatLocator = By.xpath("//div[@class='hours']//span[not(@style)]");


    public List<String> getTime() {

        List<String> time = new ArrayList<>();

        List<WebElement> timelineFormat = findElementsUsingFluentWait(timelineFormatLocator);
        for(WebElement timeline : timelineFormat) {
            time.add(timeline.getText());
        }
        return time;
    }
}
