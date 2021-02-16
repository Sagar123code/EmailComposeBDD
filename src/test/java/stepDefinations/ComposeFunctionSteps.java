package stepDefinations;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import utilities.FileUpload;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.ComposeFunctionObjects;
import utilities.PrepBrowser;

public class ComposeFunctionSteps extends PrepBrowser {
	ComposeFunctionObjects webElements= new ComposeFunctionObjects();
	
		
	@Before
	public void setUpBrowser() throws Exception {
		driver=initializeBrowser();
		driver.manage().window().maximize();
		driver.navigate().refresh();
	}

	
	@Given("^User launches \"([^\"]*)\" page$")
	public void user_launches_page(String url) throws Throwable {
		if(!prope.stringPropertyNames().contains(url)) {
			System.out.println(prope.stringPropertyNames());
			throw new Exception("Please provide "+url+" in 'data.properties' file located 'EmailCompose\\src\\main\\java\\data.properties'");
		}
//		   driver=initializeBrowser();
		String URL=prope.getProperty(url);
		System.out.println(URL);
		driver.get(URL);
	}

	@Then("^User should be on the \"([^\"]*)\" page$")
	public void user_should_be_page(String pageTitle) throws Throwable {
		if(!driver.getTitle().equals(pageTitle)) {
			throw new Exception (pageTitle+" not found");
		}
	}
	
	@When("^User provides correct credentials and logs in to Gmail$")
	public void user_provides_correct_credentials_and_logs_in_to_Gmail() throws Throwable {
		System.out.println(prope.stringPropertyNames());
		if(!prope.stringPropertyNames().contains("EmailAddress")|!prope.stringPropertyNames().contains("PassWord")){
			throw new Exception("Please provide EmailAddress and PassWord in 'data.properties' file located 'EmailCompose\\src\\main\\java\\data.properties'");
		}
	
		String EmailAddress=prope.getProperty("EmailAddress");
		driver.findElement(webElements.getWebElement("EmailAddress")).sendKeys(EmailAddress);		
		wait.until(ExpectedConditions.elementToBeClickable(webElements.getWebElement("Next")));
		driver.findElement(webElements.getWebElement("Next")).click();
		String PassWord=prope.getProperty("PassWord");
		driver.findElement(webElements.getWebElement("PassWord")).sendKeys(PassWord);
		wait.until(ExpectedConditions.elementToBeClickable(webElements.getWebElement("Next")));
		driver.findElement(webElements.getWebElement("Next")).click();		
		if(driver.findElements(By.xpath("//span[contains(text(),'Verify that it’s you')]")).size()>0) {
			throw new Exception("Gmail security Alert--Verify login once and rerun again");
		}
	}

	@Then("^User validates \"([^\"]*)\" button is \"([^\"]*)\" on \"([^\"]*)\" page$")
	public void user_validates_button_is_on_page(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(arg2.equals("displayed")) {
			if(!driver.findElement(webElements.getWebElement(arg1)).isDisplayed()) {
				throw new Exception(arg1+" is not displayed");
			}
			}
			else if(arg2.equals("not displayed")) {
				if(driver.findElement(webElements.getWebElement(arg1)).isDisplayed()) {
					throw new Exception(arg1+" is displayed");
				}
				}
			else {
				throw new Exception(arg2+" is not added in user_validates_button_is_on_page function");
			}
	}
	
		
	@Then("^User upload \"([^\"]*)\" document$")
	public void user_upload_document(String document) throws Throwable {
		FileUpload function=new FileUpload();
	  		
		if(!prope.stringPropertyNames().contains(document)) {
			throw new Exception("Add "+document+ " in data.properties file");
		}
		String filePath=prope.getProperty(document);
	
		function.fileupload(filePath);
		
		WebElement elemnet=driver.findElement(By.xpath("//div[@role='progressbar']"));
		

	    Thread.sleep(2000);
	    int i=0;
	    int x;
	    String docLoadPercentage;
 
	    if(driver.findElements(By.xpath("//div[@role='progressbar']")).size()>0){
	    while(i<100) {
	    	try {
    		docLoadPercentage=driver.findElement(By.xpath("//div[@role='progressbar']")).getAttribute("ariaValueNow");
    		x=Integer. valueOf(docLoadPercentage);
    		
    		i=x;
    		System.out.println("document load percentage"+i);
	    	}
	    	
	    	catch(Exception e) {
	    		System.out.println("document is uploaded");
	    		break;
	    	}
    		
    		
    	}
	    }

	}
	
	@When("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String button) throws Throwable {
						
		wait.until(ExpectedConditions.elementToBeClickable(webElements.getWebElement(button)));
		driver.findElement(webElements.getWebElement(button)).click();
	}
	
	@When("^User enters \"([^\"]*)\" in the \"([^\"]*)\" field$")
	public void user_enters_in_the_field(String value, String field) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(field.equalsIgnoreCase("CC")|field.equalsIgnoreCase("BCC")){
			driver.findElement(webElements.getWebElement("To")).click();
					
			driver.findElement(webElements.getWebElement(field)).click();
			driver.findElement(webElements.getWebElement(field+"_Input")).sendKeys(value);
			driver.findElement(webElements.getWebElement(field+"_Input")).sendKeys(Keys.TAB);
			
		}
		else {
		driver.findElement(webElements.getWebElement(field)).sendKeys(value);
		driver.findElement(webElements.getWebElement(field)).sendKeys(Keys.TAB);
		}
		
	}
	
	@When("^User verifies \"([^\"]*)\" text on \"([^\"]*)\" page$")
	public void user_verifies_text_on_page(String msgText, String page) throws Throwable {
	
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[contains(text(),'"+msgText+"')]")));
		
		System.out.println(msgText+ "is displayed");
	}
	
	

@When("^User verifies and \"([^\"]*)\" alert \"([^\"]*)\"$")
public void user_verifies_and_alert(String action, String expectedAlertText) throws Throwable {
	String actualAlertText=driver.switchTo().alert().getText();
    if(actualAlertText.contains(expectedAlertText)) {
    	System.out.println(expectedAlertText+" is displayed");
    }
    else {
    	throw new Exception(expectedAlertText+" not displayed instead this alert displayed: "+actualAlertText);
    }
    if(action.equalsIgnoreCase("Accept")) {
    driver.switchTo().alert().accept();
}
	driver.switchTo().defaultContent();
}


	
	@After
    public void afterScenario(Scenario scenario) throws Exception{

     	    if (scenario.isFailed()) {
    	      final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
    	      scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
    	      System.out.println("This "+scenario+" is failed");

    	}
     	    else {
     	    	System.out.println("This "+scenario+" is passed");
     	    }
     	    driver.close();	
     	    }

}
