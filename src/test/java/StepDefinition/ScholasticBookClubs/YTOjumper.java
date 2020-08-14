package StepDefinition.ScholasticBookClubs;

import Drivers.Web;
import Pages.ScholasticBookClubs.LandingPage;
import cucumber.api.java.en.When;
import net.bytebuddy.description.type.TypeDescription;
import org.testng.Assert;

public class YTOjumper {

    LandingPage landingPage = new LandingPage();
    String updatedName;

    @When("^I am on the Homepage$")
    public void launchScholasticBookClubs() {

        Web.initDriver("https://clubs3qa1.scholastic.com/home");
    }

    @When("^I Login with (.*) and (.*)$")
    public void login(String userEmail, String userPass) {
        landingPage.clickSignIn();
        landingPage.enterEmailAddress(userEmail);
        landingPage.enterPassword(userPass);
        landingPage.clickSignInPUp();
        landingPage.clickHeaderNotificationMsg();

    }

    @When("^I go to YTO page$")
    public void clickYTO() {

        landingPage.mouseHoverToEnterOrder();
        landingPage.clickOnYourTeacherOrder();

    }

    @When("^I go to By Flyer tab$")
    public void clickByFlyer() {

        landingPage.clickByFlyer();
    }

    @When("^I click on Price-Qty box$")
    public void clickPriceQty() {

        landingPage.clickPriceQtyFirst();

    }

    @When("^I verify jumper with text is displayed$")
    public void jumperWithTextIsDisplayed() {

        Assert.assertTrue(landingPage.isJumperDisplayed(), "Jumper with text is not displayed");

        landingPage.getTextOfJumper();

        landingPage.clickPriceQtySec();
    }

    @When("^I verify jumper is NOT displayed$")
    public void jumperIsNotDisplayed() {

        Assert.assertFalse(landingPage.isJumperDisplayed(), "Jumper is displayed");
    }

    @When("^I click on BonusPoint-Qty box$")
    public void clickBonusQty() {

        landingPage.clickBonusQtyFirst();
    }

    @When("^I go to My Accounts page$")
    public void goToMyAccountsPage() {

        landingPage.clickToMyAccount();
        landingPage.clickToProfile();
    }

    @When("^I update the lastName$")
    public void updateName(String userLastName) {

        updatedName = userLastName;

        landingPage.clickEditName();
        landingPage.clearLastName();
        landingPage.enterLastName(userLastName);
        landingPage.clickSaveButton();

    }

    @When("^I verify name is updated successfully in My Accounts$")
    public void verifyMyAccountName() {

        Assert.assertEquals(landingPage.getMyAccountName(), updatedName, "The name is not the same");
    }

    @When("^I verify name is updated successfully in Page Header$")
    public void verifyNameInPageHeader() {

        Assert.assertEquals(landingPage.getNameInPageHeader(), updatedName, "The name is not the same");
    }

    @When("^I add credit card$")
    public void addCreditCard() {
        landingPage.clickToAddCreditCard();
        landingPage.enterCardNumber("4111111111111111");
        landingPage.selectMonthFromDropdown("02");
        landingPage.selectYearFromDropdown("2022");
        landingPage.enterSecurityCode("222");
        landingPage.enterCardFirstName("alex");
        landingPage.enterCardLastName("al");
        landingPage.enterCardAddressOne("2419 42st street");
        landingPage.enterCardZipCode("11103");
        landingPage.enterCardPhoneNumber("2222222222");
        landingPage.clickCardSaveButton();
    }

    @When("^I verify credit card is added successfully in My Accounts$")
    public void verifyCreditCardAdded() {

        Assert.assertEquals("1111", landingPage.getFirstCardEndingNum(), "The credit card is not added");
    }

    @When("^I verify added card is displayed when shopping using credit card$")
    public void verifyAddedCardDisplayedWhenShopping() {
        landingPage.mouseHoverToEnterOrder();
        landingPage.clickOnYourTeacherOrder();
        landingPage.enterQtyInFirstPriceQty("1");
        landingPage.clickReviewCart();
        landingPage.clickProceedToCheckout();
        landingPage.clickSecProceedToCheckout();
        landingPage.clickContinueToCheckout();
        landingPage.selectPaymentMethodFromDropdown("Credit Card");
        landingPage.getCreditCardInfo();

        Assert.assertEquals("Visa ending in 1111", landingPage.getCreditCardInfo(), "The credit card is not displayed");
    }

    @When("^I search (.*)using search box$")
    public void searchBook(String bookName) {

        landingPage.enterNameInSearchBox(bookName);
        landingPage.clickOnSearchButton();
    }

    @When("^I click on 'star' icon$")
    public void clickStar() {

        landingPage.clickFirstStar();
    }

    @When("^I verify item is added to recommended list$")
    public void verifyItemIsAdded() {

        landingPage.getTextFromRecommendationsToStudent();

        landingPage.clickToMyLists();
        landingPage.getTextFromRecommendForStudent();


    }
}
