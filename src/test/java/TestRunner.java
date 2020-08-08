import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        // Path to our feature file
        features = {"src/test/resources/features"},

        // Specify step definition package name (Note: make sure to have this package on current directory)
        glue = {"StepDefinition", "Drivers"},

        // This creates cucumber reports
        plugin = {"pretty", "html:target/site/cucumber-pretty"},

        // This create auto method name in camelCase
        snippets = SnippetType.CAMELCASE,

        // Specify tags to be executed
        tags = {"@star"},

        // readable console logs
        monochrome = true
)
public class TestRunner {
}
