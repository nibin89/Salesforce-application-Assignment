/* Assignment: 3 Create a new Account
1. Navigate to the url https://login.salesforce.com/
2. Enter username using getByLabel
3. Enter password using getByLabel
4. Click Login
5. Verify the title and url of the page using appropriate assertions
6. Click App Launcher using the class locator
7. Click View All using getByText
8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
9. Click Service using index based XPath
10. Click Accounts using attribute based CSS selector
11. Click New using getByRole
12. Enter Account name using attribute based CSS selector
13. Click Save button using XPath
14. Verify the toast message displayed
 */

import { chromium,expect, test } from "@playwright/test";

test('Test to create an Account',async({page})=>{

// Go to the URL
await page.goto("https://login.salesforce.com/");

  // Locate the username input field using its associated label
  const usernameInput = page.getByLabel('username');

  // Enter the username into the input field
  await usernameInput.fill('nibin@testleaf.sandbox');

  // Optionally, you can assert that the value was entered correctly
  await expect(usernameInput).toHaveValue('nibin@testleaf.sandbox');

  //Enter the Password
  const passwordInput = page.getByLabel('Password');
  await passwordInput.fill('Testleaf2025');  

  //Login

  await page.locator("#Login").click();

  //Verify Title contains text

  //await page.waitForLoadState('networkidle',{timeout:3000}); // Ensures page content is loaded
  await page.waitForSelector("//span[@title='Setup']", { timeout: 10000 });
  await expect(page).toHaveTitle("Home | Salesforce");


  //Verify the URL of the page

  await expect(page).toHaveURL("https://testleaf132-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");

  // Click on App launcher 
  await page.locator(".slds-icon-waffle").click()

//Click View all
  await page.getByRole('button', { name: 'View All Applications' }).click();

  //Wait for 3 seconds
  await page.waitForTimeout(3000);

// Enter Service in the search box

await page.getByPlaceholder("Quick Find").fill("Service");
/* 
click Service using index based XPath
Locate the span element by its text content */
  const spanElement = await page.waitForSelector("//p[text() ='Service']")
  await spanElement.click()

  //Click on Accounts down arrow
  await page.locator("//one-app-nav-bar-item-root[@data-id='Account']//lightning-primitive-icon[@exportparts='icon']//*[name()='svg']").click()

  //Create a New Account
  await page.getByText('New Account').click();

  //Input the Account Name

  await page.locator("//input[@name ='Name']").fill("Google")

// Click on Save

  await page.locator("//button[text() ='Save']").click()


// Wait for the toast message to appear
await page.waitForSelector('.toastMessage', { timeout: 5000 });

// Verify the message
// Wait for the toast message to appear
const toastElement = await page.waitForSelector('.toastMessage');
const toastText = await toastElement.textContent();

// Check if the toast message contains "Account XYZ was created."
if (toastText?.includes("Account") && toastText.includes("was created.")) {
    console.log("✅ Toast message displayed: " + toastText);
} else {
    console.log("❌ Toast message not found or incorrect.");
}

})