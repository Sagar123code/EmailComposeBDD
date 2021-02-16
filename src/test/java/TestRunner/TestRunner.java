package TestRunner;

import org.junit.runner.RunWith;

//import Utilities.PrepBrowser;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features="src/test/java/features",
 glue={"stepDefinations"},
 dryRun= false,
// Add path where you want to save reports
 plugin={"pretty" , "html:C:\\Users\\User\\EmailComposeBdd\\Reports"},
 tags= {"@ComposeFunctionalitytest"},
 monochrome = true
 )

public class TestRunner {

		
	}

	

