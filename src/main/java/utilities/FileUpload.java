package utilities;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

public class FileUpload {
	
	public void fileupload(String filePath) throws AWTException {
	
	StringSelection filepath= new StringSelection(filePath);
	
	Toolkit.getDefaultToolkit().getSystemClipboard().setContents(filepath, null);
	
	Robot robot=new Robot();
	robot.delay(5000);
	robot.keyPress(KeyEvent.VK_ENTER);
	robot.keyRelease(KeyEvent.VK_ENTER);
	robot.keyPress(KeyEvent.VK_CONTROL);
	robot.keyPress(KeyEvent.VK_V);
	robot.keyRelease(KeyEvent.VK_CONTROL);
	robot.keyRelease(KeyEvent.VK_V);
	robot.keyPress(KeyEvent.VK_ENTER);
	robot.keyRelease(KeyEvent.VK_ENTER);

	}
	
	
}
