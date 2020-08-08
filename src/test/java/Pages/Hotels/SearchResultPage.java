package Pages.Hotels;

import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class SearchResultPage extends BasePage {

    //String star;

    By starRatingLocator = By.xpath("//label[contains(@id, 'f-label-star-rating-')]");
    By hotelsStarLocator = By.xpath("//span[@class='star-rating-text star-rating-text-strong']");
    By infoLocator = By.id("result-info-container");
    By checkBoxStarRatingLocator = By.id("filter-star-rating");

    public void clickTheStar(String userSelectedStar) {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        //star = userSelectedStar;
        clickThis(By.xpath("//label[contains(@id, 'f-label-star-rating-" + userSelectedStar + "')]"));

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public List<String> getHotelsStar() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        List<String> hotelsStar = new ArrayList<>();
        List<WebElement> hotelStar = findElementsUsingFluentWait(hotelsStarLocator);
        for(WebElement star : hotelStar) {
            hotelsStar.add(star.getText());
        }
        return hotelsStar;
    }

    public void scrollToInfo() {

        scrollUpToWebElement(infoLocator);

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void scrollToCheckBoxStarRating() {

        scrollUpToWebElement(checkBoxStarRatingLocator);
    }
}
