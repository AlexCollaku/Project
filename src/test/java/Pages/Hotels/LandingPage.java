package Pages.Hotels;

import Drivers.Web;
import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class LandingPage extends BasePage {

    By searchBoxLocator = By.id("qf-0q-destination");
    By searchButtonLocator = By.xpath("//button[@type='submit']");
    By autoSuggestionLocator = By.xpath("//div[@class='autosuggest-category-result']");
    By childrenDropdownLocator = By.id("qf-0q-room-0-children");
    By numOfAgeBoxLocator = By.xpath("//select[contains(@id, 'qf-0q-room-0-child-')]/preceding-sibling::label[contains(@for, 'qf-0q-room-0-child-')]");


    public void enterDestination(String destination) {
        scrollByPixel(200);
        type(searchBoxLocator, destination);

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


    }

    public void clickSearchButton() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(searchButtonLocator);
    }

    public void selectDestFromAutoSuggestions(String userWantToSelectThis) {

        selectFromAutoSuggestion(autoSuggestionLocator, userWantToSelectThis);
    }

    public void selectChildrenFromDropdown(String visibleText) {

        scrollByPixel(200);

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        selectFromDropdownByVisibleText(childrenDropdownLocator, visibleText);
    }

    public int ageChildrenButton() {
        int count = 0;
        List<WebElement> ageButton = findElementsUsingFluentWait(numOfAgeBoxLocator);
        for (WebElement button : ageButton) {
            if (button.isDisplayed()) {
                count++;
            }
        } return count;
    }
}