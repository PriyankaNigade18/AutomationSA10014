package com.Bstack.TestCases;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.Bstack.Base.BaseTest;

public class ProductPageTest extends BaseTest
{
	@BeforeClass
	public void pageSetup()
	{
		lp.getSignIn();
		lp.dologin();
		
	}
	
  @Test(priority=1)
  public void verifyTotalProducts()
  {
	  int count=prodp.getProductCount();
	  System.out.println("Total Products are: "+count);
  }
  
  @Test(priority=2)
  public void verifyProducts()
  {
	  prodp.getAppProductDetails();
  }
}
