package MyRunner;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//@RunWith(Cucumber.class)

// PDF report using cummber
@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(jsonReport = "target2/cucumber.json",
retryCount = 0,
detailedReport = true,
detailedAggregatedReport = true,
overviewReport = true,
coverageReport = true,
featureOverviewChart = true,
jsonUsageReport = "target2/cucumber-usage.json",
usageReport = true,
screenShotLocation = "/screenshots/",
screenShotSize = "300px",
toPDF = true,
excludeCoverageTags = {"@flaky" },
includeCoverageTags = {"@passed" },
outputFolder = "target")

@CucumberOptions(
	features = "src\\test\\java\\Features\\GmailLogin.feature",
	glue={"StepDefinition"},
	format= {"pretty" , "html:target2/cucumber-html-report","json:target2/cucumber.json","usage:target2/cucumber-usage.json","junit:target2/cucumber.xml","com.cucumber.listener.ExtentCucumberFormatter:output/report.html","rerun:target2/rerun.txt"}
	
	)
public class TestRunner {

}
