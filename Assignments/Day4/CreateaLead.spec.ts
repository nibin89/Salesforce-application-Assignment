import { chromium,expect, test } from "@playwright/test";

/* Assignment Details:
Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or 
ID, edits details of the lead (such as name, email, or status), and verifies that the changes have 
been successfully saved. */

test('Test to launch a browser',async({page})=>{

    // Go to the URL
    await page.goto("http://leaftaps.com/opentaps/control/main");

// Fill the Username
await page.locator("//input[@id='username']").fill('Demosalesmanager');

// Fill the Password
await page.locator("//input[@id='password']").fill('crmsfa');

// Click login Button
await page.locator(("//input[@type='submit']")).click();

//Get the text
await page.locator(("//a[contains(text(),'CRM')]")).click();

// Click Leads

await page.locator("//a[text() ='Leads']").click();


// Click Create Lead

await page.locator('//a[text() ="Create Lead"]').click();

/*  Fill the Lead details of the CRM application */

//Assertions for Company Name is Visible

await expect(page.locator('//input[@id="createLeadForm_companyName"]')).toBeVisible()

//Fill the Company Name

await page.locator('//input[@id="createLeadForm_companyName"]').fill('Traction Complete')


//Assertions for First Name is visible
await expect(page.locator('//input[@id="createLeadForm_firstName"]')).toBeVisible()

// Fill the First Name
await page.locator('//input[@id="createLeadForm_firstName"]').fill('Nibin');


//Assertionsfor Last Name is Editable
await expect(page.locator('//input[@id="createLeadForm_lastName"]')).toBeEditable()

// Fill the Last Name
await page.locator('//input[@id="createLeadForm_lastName"]').fill('Mathew');

// Fill the Salutation
await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Dr');

// Fill the Title
await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('QA');

// Fill the Annual Revenue
await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('20000000');

// Fill the Department
await page.locator('//input[@id="createLeadForm_departmentName"]').fill('DEV');

// Fill the Phone number
await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('2368826751');

// Click on Create lead button
await page.locator('//input[@class="smallSubmit"]').click();

// Get the Status

await page.waitForSelector('//span[@id="viewLead_statusId_sp"]', { state: 'visible', timeout: 10000 }); // Waits up to 10 seconds
const statusVisible = await page.isVisible('//span[@id="viewLead_statusId_sp"]');
 console.log(statusVisible); 
//console.log("Element is visible");


})


