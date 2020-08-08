package Pages.Hotels;

import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class SearchResultPage extends BasePage {

    String star;

    By starRatingLocator = By.xpath("//label[contains(@id, 'f-label-star-rating-"+ star +"')]");
    By hotelsStarLocator = By.xpath("//span[@class='star-rating-text star-rating-text-strong']");
    By infoLocator = By.id("result-info-container");
    By checkBoxStarRatingLocator = By.id("filter-star-rating");

    public void clickTheStar(String userSelectedStar) {

        star = userSelectedStar;
        clickThis(starRatingLocator);

    }

    public List<String> getHotelsStar() {

        List<String> hotelsStar = new ArrayList<>();
        List<WebElement> hStar = findElementsUsingFluentWait(hotelsStarLocator);
        for(WebElement star : hStar) {
            hotelsStar.add(star.getText());
        }
        return hotelsStar;
    }

    public void scrollToInfo() {

        scrollUpToWebElement(infoLocator);
    }

    public void scrollToCheckBoxStarRating() {

        scrollUpToWebElement(checkBoxStarRatingLocator);
    }
}
