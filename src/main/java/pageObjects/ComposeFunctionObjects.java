package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ComposeFunctionObjects {
	public WebDriver driver;	

	public By EmailAddress=By.xpath("//input[@id='identifierId']");
	public By PassWord=By.xpath("//input[@name='password']");
	public By Next=By.xpath("//span[contains(text(),'Next')]/..");
	public By Compose=By.xpath("//div[contains(text(),'Compose')]");
	public By NewMessage=By.xpath("//div[contains(text(),'New Message')]");
	public By To=By.xpath("//textarea[@name='to']");
	public By Subject=By.xpath("//input[@name='subjectbox']");
	public By Sendbutton=By.xpath("//div[contains(text(),'Send') and @role='button']");
	public By AttachmentLink=By.xpath("//div[@data-tooltip='Attach files']//div");
	public By MainMenu=By.xpath("//div[@aria-label='Main menu']");
	public By noToErrorMessage=By.xpath("//div[contains(text(),'Please specify at least one recipient.')]");
	public By Cc=By.xpath("//span[text()='Cc']");
	public By Bcc=By.xpath("//span[text()='Bcc']");
	public By Bcc_Input=By.xpath("//textarea[@name='bcc']");
	public By Cc_Input=By.xpath("//textarea[@name='cc']");

	public By getWebElement(String arg1) {
		arg1=arg1.replaceAll("\\s", "");
		switch(arg1) {
		case "EmailAddress": return this.EmailAddress;
		case "PassWord": return this.PassWord;
		case "Next": return this.Next;
		case "Compose": return this.Compose;
		case "Composebutton": return this.Compose;
		case "NewMessage": return this.NewMessage;
		case "To": return this.To;
		case "Subject": return this.Subject;
		case "Sendbutton": return this.Sendbutton;
		case "AttachmentLink": return this.AttachmentLink;
		case "MainMenu": return this.MainMenu;
		case "Pleasespecifyatleastonerecipient.": return this.noToErrorMessage;
		case "Cc_Input": return this.Cc_Input;
		case "Bcc_Input": return this.Bcc_Input;
		case "Cc": return this.Cc;
		case "Bcc": return this.Bcc;
		default: return null;
		}
		
	}

	public WebElement webElement(By element) {
		return driver.findElement(element);
		
	}
	

}
