import { test, expect } from '@playwright/test'

test.describe.configure({ mode: 'serial' })
//Test Case 1 (Manual Test Case: Verify that the user is able to login with valid credentials)
test('login test', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Daniel')
    await page.locator('[placeholder="Enter your password"]').fill('1234')

    await page.waitForSelector('text=Sign in', { timeout: 5000 })
    await page.locator('text=Sign in').click()
})
//Test Case 2 (Recorded Test Case: Verify that the user is able to login and logout with valid credentials)
test('login test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})
//Negative Testing (Manual Test Case: Verify that the user is not able to login with empty/invalid credentials)
test('Negative Testing', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('button', { name: 'Login' }).click();
    //Verify Error Message is Displayed
    const usernameError = await page.locator('.oxd-input-field-error-message').nth(0).textContent('Required');
    const passwordError = await page.locator('.oxd-input-field-error-message').nth(1).textContent('Required');
   
})