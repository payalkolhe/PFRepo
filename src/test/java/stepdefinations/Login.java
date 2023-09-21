package stepdefinations;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	WebDriver driver = null;

	@Test
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "drivers//chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Given("^I navigate to facegenie website$")
	public void i_navigate_to_facegenie_website() throws Throwable {
		driver.get("https://facegenie-ams-school.web.app/");
		throw new PendingException();
	}

	@When("^I enter gmail as (.*)and password as (.*)into the fields$")
	public void i_enter_gmail_as_and_password_as_into_the_fields(String email, String Password) {
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.id("password")).sendKeys(Password);
	}

	@And("^I click on the Login button$")
	public void I_click_on_the_Login_button() {
		driver.findElement(By.cssSelector("button[type=\"submit\"][style=\"line-height\"]")).click();
	}

	@Then("^User should login based on expected \"([^\"]*)\" status$")
	public void user_should_login_based_on_expected_status() {
		WebElement element = null;
		try {
			element = driver.findElement(By.cssSelector(
					"#root > div > div:nth-child(1) > div > div > div > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-e7x0wp > div > img"));
		} catch (Exception e) {
			System.out.println("User has not logged in");
		}
		Assert.assertNotNull("User has not logged in", element);
	}
}
