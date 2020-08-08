package Drivers;

import Utils.ScreenshotHelper;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Web {

    private static WebDriver driver;

   @Before
    public static void initDriver(String url) {
        System.setProperty("webdriver.chrome.driver", "./DriverExecFiles/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get(url);
        driver.manage().window().maximize();
    }

    public static void closeDriver() {

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        driver.close();
    }

    public static WebDriver getDriver() {

        return driver;
    }

   @After
    public static void quitDriver(Scenario scenario) {

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        if(scenario.isFailed()) {
            ScreenshotHelper.takeWebScreenShot(scenario.getName());
        }
        driver.quit();
    }
}
