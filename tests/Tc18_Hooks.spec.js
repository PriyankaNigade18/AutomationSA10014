//create test suite: group

import {test,expect} from "@playwright/test"
import { describe } from "@playwright/test"


describe.serial("This is test suite",()=>{

test.beforeAll(()=>{
    console.log("BeforeAll executes only once before all test cases");
    
})

test.afterAll(()=>{
    console.log("AfterAll executes only once after all test cases");
    
})

test.beforeEach(()=>{
    console.log("BeforeEach executes before every test cases");
    
})

test.afterEach(()=>{
    console.log("AfterEach executes after every test cases");
    
})

test("Test case1",async({page})=>{
    
console.log("This is test case1");


})

test("Test case2",async({page})=>{
    
console.log("This is test case2");


})

test("Test case3",async({page})=>{
    
console.log("This is test case3");

})




})