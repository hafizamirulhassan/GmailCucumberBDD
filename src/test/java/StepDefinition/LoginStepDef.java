package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStepDef {
	WebDriver driver;
	
	@Given("^user opens Google page$")
	public void user_opens_Google_page() throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\eclipse-workspace\\GmailLoginBDD\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
		/*String title=driver.getTitle();
		System.out.println("Your domain title is :"+title);*/
		Thread.sleep(3000);
	}
	/*@Then("^user press gmail login button$")
	public void user_press_gmail_login_button() throws InterruptedException
	{

		WebElement gmailbutton= driver.findElement(By.className("gb_d"));
		gmailbutton.click();
		System.out.println("You Entered :"+gmailbutton.getText());
		Thread.sleep(3000);
	}
	@Then("^User press signin button$")
	public void User_press_signin_button() throws InterruptedException
	{

		WebElement signinbutton=driver.findElement(By.xpath("/html/body/div[2]/div[1]/div[5]/ul[1]/li[2]/a"));
		signinbutton.click();
		System.out.println("You Entered :"+signinbutton.getText());
		Thread.sleep(3000);
	}*/
	@Then("^user enters email and press next button$")
	public void user_enters_email_and_press_next_button() throws InterruptedException
	{

		WebElement username=driver.findElement(By.xpath("//*[@id=\"identifierId\"]"));
		username.sendKeys("fiha0095@gmail.com");
		/*System.out.println("You Entered :"+username.getAttribute("value"));
		Thread.sleep(3000);*/
		WebElement nxtbtn=driver.findElement(By.xpath("//*[@id=\"identifierNext\"]/div/button/div[2]"));
		nxtbtn.click();
		/*System.out.println("You Entered :"+nxtbtn.getText());*/
		Thread.sleep(3000);
		
	}
	/*@Then("^press next button$")
	public void press_next_button() throws InterruptedException
	{

		WebElement nxtbtn=driver.findElement(By.cssSelector("#identifierNext > content > span"));
		nxtbtn.click();
		System.out.println("You Entered :"+nxtbtn.getText());
		Thread.sleep(3000);
	}*/

	@Then("^user enters password and press next button again$")
	public void user_enters_password_and_press_next_button_again() throws InterruptedException
	{

		WebElement pass=driver.findElement(By.xpath("//*[@id=\"password\"]"));
		pass.sendKeys("pakistan@123");
		/*System.out.println("You Entered :"+pass.getAttribute("value"));*/
		Thread.sleep(3000);
		WebElement nxtbtn=driver.findElement(By.cssSelector("#passwordNext > content"));
		nxtbtn.click();
		/*System.out.println("You Entered :"+nxtbtn.getText());
		Thread.sleep(3000);*/
	}
	
	@Then("^get the title of gmail login page and verify$")
	public void get_the_title_of_gmail_login_page_and_verify() throws InterruptedException
	{

		
		String title =driver.getTitle();
		Assert.assertEquals("Gmail", title);
		
	}
	
	/*@Then("^press next button again$")
	public void press_next_button_again() throws InterruptedException
	{

		WebElement nxtbtn=driver.findElement(By.cssSelector("#identifierNext > content > span"));
		nxtbtn.click();
		System.out.println("You Entered :"+nxtbtn.getText());
		Thread.sleep(3000);
	}*/
	
	@And("^close the browser$")
	public void close_the_browser()
	{
		driver.quit();
	}
}
