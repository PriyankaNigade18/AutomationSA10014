package com.Bstack.Pages;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage
{
	private WebDriver driver;
	
	public ProductPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver,this);
		
	}
	
	@FindBy(xpath="//p[@class='shelf-item__title']")
	List<WebElement> allProducts;

	public int getProductCount()
	{
		return allProducts.size();
	}
	
	public void getAppProductDetails()
	{
		for(WebElement i: allProducts)
		{
			System.out.println(i.getText());
		}
	}
}
