package com.Bstack.TestCases;

import org.testng.annotations.Test;

import com.Bstack.Base.BaseTest;

public class LoginPageTest extends BaseTest
{
	@Test(priority=1)
	public void verifySignIn()
	{
		lp.getSignIn();
		
	}
  @Test(priority=2)
  public void testLogin()
  {
	  lp.dologin();
  }
}
