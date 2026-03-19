package com.Bstack.Base;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import com.Bstack.Pages.LoginPage;
import com.Bstack.Pages.ProductPage;

public class BaseTest 
{
	  public  WebDriver driver;
	  public LoginPage lp;
	  public ProductPage prodp;

	  @BeforeClass
	    public void setUp() {
		  	driver = new ChromeDriver();   // Launch Chrome
		  	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	        driver.manage().window().maximize();
	        driver.get("https://bstackdemo.com/");
	             
	        lp=new LoginPage(driver);
	        prodp=new ProductPage(driver);
	    }

	    @AfterClass
	    public void tearDown() {
	        if (driver != null) {
	            driver.quit();
	        }
	    }

}
