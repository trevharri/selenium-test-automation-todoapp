const { Builder, By, Key } = require('selenium-webdriver')
// const assert = require('assert')
var should = require("chai").should()


describe("Add another todo tests", function(){

    it("Successfully adds another todo to the application.", async function(){
        let driver = await new Builder().forBrowser("safari").build()

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        //add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN)

        //assert
        let todoText = await driver
            .findElement(By.xpath("//li[last()]/span"))
            .getText()
            .then(function(value){
                return value
        })

        //chai should
        todoText.should.equal("Learn Selenium")

        await driver.quit()
    });

    it("Adding a new test for reporting.", async function(){
        let driver = await new Builder().forBrowser("safari").build()

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        //add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN)

        //assert
        let todoText = await driver
            .findElement(By.xpath("//li[last()]/span"))
            .getText()
            .then(function(value){
                return value
        })

        //chai should
        todoText.should.equal("Learn JavaScript")

        await driver.quit()
    });



});




