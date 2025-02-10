import { chromium,expect, test } from "@playwright/test";


//Assignment: 2 Edit a Lead

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

//Find Leads link

await page.locator("//a[text() ='Find Leads']").click();

// Enter the first name

await page.locator("//div[@class='x-form-item x-tab-item']//label[contains(text(),'First name:')]/following-sibling::div//input").fill("Nibin");

// Click Find Leads button

await page.locator("//a[text() ='Find Leads']").click();

//Wait for Grid is available

await page.waitForSelector("//div[@class='frameSectionHeader']//div[@class='x-panel-tr']/div[@class='x-panel-tc']", { state: 'visible', timeout: 1000 });

//Click the First Lead id

await page.locator(".x-grid3-td-partyId.x-grid3-cell-first a").first().click()

//Edit  a lead

await page.locator("(//a[@class='subMenuButton'])[3]").click()

//Assertions for Company Name is Visible

await expect(page.locator('//input[@id="updateLeadForm_companyName"]')).toBeVisible()

//Fill the Company Name

await page.locator('//input[@id="updateLeadForm_companyName"]').fill('Traction on Demand')


//Assertions for First Name is visible
await expect(page.locator('//input[@id="updateLeadForm_firstName"]')).toBeVisible()

// Fill the First Name
await page.locator('//input[@id="updateLeadForm_firstName"]').fill('Saj');


//Assertionsfor Last Name is Editable
await expect(page.locator('//input[@id="updateLeadForm_lastName"]')).toBeEditable()

// Fill the Last Name
await page.locator('//input[@id="updateLeadForm_lastName"]').fill('Sajan');

// Fill the Salutation
await page.locator('//input[@id="updateLeadForm_personalTitle"]').fill('Mr');

// Fill the Title
await page.locator('//input[@id="updateLeadForm_generalProfTitle"]').fill('Dev');

// Fill the Annual Revenue
await page.locator('//input[@id="updateLeadForm_annualRevenue"]').fill('30000000');

// Fill the Department
await page.locator('//input[@id="updateLeadForm_departmentName"]').fill('DEV');

// Fill the Description
await page.locator('//textarea[@id="updateLeadForm_description"]').fill('DEV');

// Update the Lead

await page.locator('//input[@value="Update"]').click()

})


