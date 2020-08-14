package Pages.ScholasticBookClubs;

import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class LandingPage extends BasePage {

    By signInLocator = By.xpath("//li[@class='mylists']//a[@class='signin']");
    By emailAddressLocator = By.xpath("(//input[@id='dwfrm_login_username'])[2]");
    By passwordLocator = By.xpath("(//input[@id='dwfrm_login_password'])[2]");
    By signInPUpLocator = By.xpath("//button[@class='home-page-login-btn  sign-in-mod']");
    By notificationCloseLocator = By.xpath("//span[@class='notification-close']");
    By headerNotificationMsgLocator = By.xpath("//span[contains(text(), 'Offer and Notifications')]");
    By enterOrderLocator = By.xpath("(//a[@id='enter-orders'])[2]");
    By yourTeacherOrderLocator = By.xpath("(//li[@id='your-teacher-order'])[2]");
    By byFlyerLocator = By.xpath("(//span[text()='By Flyer'])[1]");
    By priceQtyFirstLocator = By.xpath("(//td[@class=' item-qty']//input[contains(@class, 'numericenteronly')])[1]");
    By priceQtySecLocator = By.xpath("(//td[@class=' item-qty']//input[contains(@class, 'numericenteronly')])[2]");
    By priceQtyAllLocators = By.xpath("//td[@class=' item-qty']//input[contains(@class, 'numericenteronly')]");
    By jumperLocator = By.id("info-student-flyer-order-fee");
    By jumperTextLocator = By.xpath("//div[@class='info-modal-content']");
    By bonusQtyFirstLocator = By.xpath("(//td[@class=' bonus-qty'])[1]");
    By bonusQtySecLocator = By.xpath("(//td[@class=' bonus-qty'])[2]");
    By bonusQtyAllLocator = By.xpath("//td[@class=' bonus-qty']");
    By myAccountLocator = By.xpath("//span[contains(@class, 'user-account-name')]");
    By profileLocator = By.xpath("//a[@title='Profile']");
    By editNameLocator = By.xpath("(//a[@class='reading-club'])[2]");
    By firstNameLocator = By.id("dwfrm_profile_customer_firstname");
    By saveButtonLocator = By.xpath("(//button[@class='button-continue'])[2]");
    By lastNameLocator = By.id("dwfrm_profile_customer_lastname");
    By myAccountNameLocator = By.xpath("(//div[@class='text-blk'])[1]");
    By userNameInPageHeaderLocator = By.xpath("//span[@class='user-data']");
    By addCreditCardLocator = By.xpath("//a[contains(@class, 'add-creditcardtoaccount')]");
    By cardNumberLocator = By.id("//input[@id='dwfrm_paymentinstruments_creditcards_newcreditcard_number_d0dlpfjvxzzc']");
    By monthDropdownLocator = By.xpath("//div[text()='Month']");
    By yearDropdownLocator = By.xpath("//div[text()='Year']");
    By securityCodeLocator = By.id("dwfrm_paymentinstruments_creditcards_newcreditcard_cvn");
    By cardFirstNameLocator = By.id("dwfrm_paymentinstruments_creditcards_address_firstname");
    By cardLastNameLocator = By.id("dwfrm_paymentinstruments_creditcards_address_lastname");
    By cardAddressOneLocator = By.id("dwfrm_paymentinstruments_creditcards_address_address1");
    By cardZipCodeLocator = By.id("dwfrm_paymentinstruments_creditcards_address_postal");
    By cardPhoneNumberLocator = By.id("dwfrm_paymentinstruments_creditcards_address_phone");
    By cardSaveButtonLocator = By.id("applyBtn");
    By myCardLocator = By.xpath("//span[@class='bold']");
    By reviewCartLocator = By.xpath("//button[text()='Review Cart']");
    By proceedToCheckoutLocator = By.id("dwfrm_cart_checkoutCart");
    By secProceedToCheckoutLocator = By.xpath("(//button[@name='dwfrm_cart_checkoutCart'])[2]");
    By continueToCheckoutLocator = By.id("btn-continue-checkout");
    By paymentMethodLocator = By.xpath("//div[@class='selected-option']");
    By cardTypeLocator = By.xpath("//div[@class='custom-select credit']//div[@class='selected-option input-select selected-active']");
    By creditCardInfoLocator = By.xpath("//td[text()='Visa ending in 1111']");
    By searchBoxLocator = By.id("q");
    By searchButtonLocator = By.xpath("//button[@type='submit']//i[@class='fa fa-search']");
    By firstStarLocator = By.xpath("(//i[@class='icon-a fa-tcool-star tooltipstered'])[1]");
    By recommendationsToStudentLocator = By.xpath("//div[text()='Recommendations to Students']");
    By myListsLocator = By.xpath("//a[@class='toggle-item']");
    By recommendForStudentLocator = By.xpath("//li[@class='recommend']");
    By nameOfSelectedBookLocator = By.xpath("//div[@class='name ']//a[@class='quickview']");






    public void clickSignIn() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(signInLocator);
    }

    public void enterEmailAddress(String userEmailAddress) {

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        type(emailAddressLocator, userEmailAddress);
    }

    public void enterPassword(String userPassword) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        type(passwordLocator, userPassword);
    }

    public void clickSignInPUp() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(signInPUpLocator);
    }

    public void clickNotificationClose() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(notificationCloseLocator);
    }

    public void clickHeaderNotificationMsg() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(headerNotificationMsgLocator);
    }

    public void mouseHoverToEnterOrder() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        mouseHoverOnElement(enterOrderLocator);
    }

    public void clickOnYourTeacherOrder() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(yourTeacherOrderLocator);
    }

    public void clickByFlyer() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(byFlyerLocator);
    }

    public void clickPriceQtyFirst() {

        scrollByPixel(400);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(priceQtyFirstLocator);
    }

    public void clickPriceQtySec() {

        scrollByPixel(400);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(priceQtySecLocator);
    }

    public void clickPriceQtyAll() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        List<WebElement> priceQtyAll = findElementsUsingFluentWait(priceQtyAllLocators);
        for(WebElement qty : priceQtyAll) {
            qty.click();
            break;

        }
    }

    public boolean isJumperDisplayed() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return isWebElementDisplayed(jumperLocator);

    }

    public String getTextOfJumper() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return getTextFromElement(jumperTextLocator);
    }

    public void clickBonusQtyFirst() {

        scrollByPixel(300);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(bonusQtyFirstLocator);
    }

    public void clickBonusQtySec() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(bonusQtySecLocator);
    }
    public void clickBonusQtyAll() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        List<WebElement> bonusQtyAll = findElementsUsingFluentWait(bonusQtyAllLocator);
        for (WebElement qty : bonusQtyAll) {
            qty.click();
            break;
        }
    }

    public void clickToMyAccount() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(myAccountLocator);
    }

    public void clickToProfile() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(profileLocator);
    }

    public void clickEditName() {

        scrollByPixel(200);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(editNameLocator);
    }

    public void clearFirstName() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clearField(firstNameLocator);
    }

    public void enterName(String userName) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        type(firstNameLocator, userName);
    }

    public void clickSaveButton() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(saveButtonLocator);
    }

    public void clearLastName() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clearField(lastNameLocator);
    }

    public void enterLastName(String userLastName) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        type(lastNameLocator, userLastName);
    }

    public String getMyAccountName() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return getTextFromElement(myAccountNameLocator);
    }

    public String getNameInPageHeader() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return getTextFromElement(userNameInPageHeaderLocator);
    }

    public void clickToAddCreditCard() {

        scrollByPixel(300);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        clickThis(addCreditCardLocator);
    }

    public void enterCardNumber(String cardNumber) {

        type(cardNumberLocator, cardNumber);
    }

    public void selectMonthFromDropdown(String month) {

        selectFromDropdownByVisibleText(monthDropdownLocator, month);
    }

    public void selectYearFromDropdown(String year) {

        selectFromDropdownByVisibleText(yearDropdownLocator, year);
    }

    public void enterSecurityCode(String securityCode) {

        type(securityCodeLocator, securityCode);
    }

    public void enterCardFirstName(String firstName) {

        type(cardFirstNameLocator, firstName);
    }

    public void enterCardLastName(String lastName) {

        type(cardLastNameLocator, lastName);
    }

    public void enterCardAddressOne(String addressOne) {

        type(cardAddressOneLocator, addressOne);

    }

    public void enterCardZipCode(String zipCode) {

        type(cardZipCodeLocator, zipCode);
    }

    public void enterCardPhoneNumber(String phoneNumber) {

        type(cardPhoneNumberLocator, phoneNumber);
    }

    public void clickCardSaveButton() {

        clickThis(cardSaveButtonLocator);
    }

    public String getFirstCardEndingNum() {

        return getTextFromElement(myCardLocator);
    }

    public void enterQtyInFirstPriceQty(String userChoise) {

        type(priceQtyFirstLocator, userChoise);
    }

    public void clickReviewCart() {

        clickThis(reviewCartLocator);
    }

    public void clickProceedToCheckout() {

        clickThis(proceedToCheckoutLocator);
    }

    public void clickSecProceedToCheckout() {

        clickThis(secProceedToCheckoutLocator);
    }

    public void clickContinueToCheckout() {

        clickThis(continueToCheckoutLocator);
    }

    public void selectPaymentMethodFromDropdown(String paymentMethod) {

        selectFromDropdownByVisibleText(paymentMethodLocator, paymentMethod);
    }

    public void selectCardTypeFromDropdown(String cardType) {

        selectFromDropdownByVisibleText(cardTypeLocator, cardType);
    }

    public String getCreditCardInfo() {

        return getTextFromElement(creditCardInfoLocator);
    }

    public void enterNameInSearchBox(String name) {

        type(searchBoxLocator, name);
    }

    public void clickOnSearchButton() {

        clickThis(searchButtonLocator);
    }

    public void clickFirstStar() {

        clickThis(firstStarLocator);
    }

    public String getTextFromRecommendationsToStudent() {

        return getTextFromElement(recommendationsToStudentLocator);
    }

    public void clickToMyLists() {

        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        clickThis(myListsLocator);
    }

    public String getTextFromRecommendForStudent() {
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return getTextFromElement(recommendForStudentLocator);
    }

    public String getNameOfSelectedBook() {
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return getTextFromElement(nameOfSelectedBookLocator);
    }

}
