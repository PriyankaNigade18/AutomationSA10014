package com.Bstack.Pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class LoginPage {

    private WebDriver driver;
 

    public LoginPage(WebDriver driver) {
        this.driver=driver;
        PageFactory.initElements(driver,this);
        
    }

 // Sign In button
    
    @FindBy(xpath="//span[@id='signin']") 
    private WebElement signin;


    @FindBy(xpath="(//*[local-name()='svg'])[2]")
    private WebElement usernamedropdown;
    
    @FindBy(xpath="//div[text()='demouser']")
    private WebElement username;

    @FindBy(xpath="(//*[local-name()='svg'])[3]")
    private WebElement passworddropdown;
    
    @FindBy(xpath="//div[text()='testingisfun99']")
    private WebElement password;
    
    @FindBy(xpath="//button[text()='Log In']")
    private WebElement loginBtn;


    public void getSignIn() {
    		signin.click();
    		try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    	}
   
    public void dologin()
    	{
    		usernamedropdown.click();
    	
    		username.click();
    		
    		passworddropdown.click();
    		
    		password.click();
    		loginBtn.click();

    		
    	}

}