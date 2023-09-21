$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the facegenie application",
  "description": "",
  "id": "login-to-the-facegenie-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "login with valid credentials",
  "description": "",
  "id": "login-to-the-facegenie-application;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I navigate to facegenie website",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter gmail as testbams@gmail.com and password as facegenie  into the fields",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should login based on expected \"\u003cLoginstatus\u003e\" status",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-to-the-facegenie-application;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "Password",
        "status"
      ],
      "line": 8,
      "id": "login-to-the-facegenie-application;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "testbams@gmail.com",
        "facegenie",
        "success"
      ],
      "line": 9,
      "id": "login-to-the-facegenie-application;login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "TestBams@gmail.com",
        "Facegenie",
        "Fail"
      ],
      "line": 10,
      "id": "login-to-the-facegenie-application;login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "login with valid credentials",
  "description": "",
  "id": "login-to-the-facegenie-application;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I navigate to facegenie website",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter gmail as testbams@gmail.com and password as facegenie  into the fields",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should login based on expected \"\u003cLoginstatus\u003e\" status",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_navigate_to_facegenie_website()"
});
formatter.result({
  "duration": 70062400,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepDefination.Login\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 54 more\r\nCaused by: java.lang.Error: Unresolved compilation problems: \n\tThe type org.openqa.selenium.chromium.ChromiumDriver cannot be resolved. It is indirectly referenced from required .class files\n\tType mismatch: cannot convert from ChromeDriver to WebDriver\n\r\n\tat stepDefination.Login.\u003cinit\u003e(Login.java:1)\r\n\t... 59 more\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Login.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLoginstatus\u003e",
      "offset": 37
    }
  ],
  "location": "Login.user_should_login_based_on_expected_status(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "login with valid credentials",
  "description": "",
  "id": "login-to-the-facegenie-application;login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I navigate to facegenie website",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter gmail as testbams@gmail.com and password as facegenie  into the fields",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should login based on expected \"\u003cLoginstatus\u003e\" status",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_navigate_to_facegenie_website()"
});
formatter.result({
  "duration": 152900,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepDefination.Login\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 54 more\r\nCaused by: java.lang.Error: Unresolved compilation problems: \n\tThe type org.openqa.selenium.chromium.ChromiumDriver cannot be resolved. It is indirectly referenced from required .class files\n\tType mismatch: cannot convert from ChromeDriver to WebDriver\n\r\n\tat stepDefination.Login.\u003cinit\u003e(Login.java:1)\r\n\t... 59 more\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Login.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLoginstatus\u003e",
      "offset": 37
    }
  ],
  "location": "Login.user_should_login_based_on_expected_status(String)"
});
formatter.result({
  "status": "skipped"
});
});