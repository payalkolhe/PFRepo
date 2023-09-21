package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features/Login.feature", glue = { "src/test/java/stepdefinations" })
public class Runner {

}
