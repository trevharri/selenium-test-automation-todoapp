const { Builder, By, Key } = require('selenium-webdriver')
// const assert = require('assert')
var should = require("chai").should()

async function example(){
//launch the browser
let driver = await new Builder().forBrowser("safari").build()

//navigate to our application
await driver.get("https://lambdatest.github.io/sample-todo-app/")

//add a todo
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN)

//assert
let todoText = await driver.findElement(By.xpath("//li[last()]/span")).getText().then(function(value){
    return value
})

console.log(todoText)

//node assertion library
// assert.strictEqual(todoText, "Learn Selenium")

//chai should
todoText.should.equal("Learn Selenium")

await driver.quit()

    // while (true){
    //     null
    // }


}


example()