package utilities;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PrepBrowser {
	public WebDriver driver;
	public Properties prope;
	public WebDriverWait wait ;
	

	public WebDriver initializeBrowser() throws Exception {
		prope=new Properties();
		
		FileInputStream file=new FileInputStream("C:\\Users\\User\\EmailComposeBdd\\src\\main\\java\\data.properties");
		
		prope.load(file);
		
		String browserType=prope.getProperty("browser");
		String chromeExtensionPath=prope.getProperty("chromeExtensionPath");
		if(browserType.equals("Chrome")) {
		System.setProperty("webdriver.chrome.driver", chromeExtensionPath);
		driver=new ChromeDriver();
		}
		else if(!browserType.equals("Chrome")) { 
			throw new Exception(browserType+" driver proprties is not set in the PrepBrowser class");
			
		}
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		wait= new WebDriverWait(driver,30);
		 return driver;
	}
   
}
