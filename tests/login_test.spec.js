import { test, expect } from '@playwright/test'

test ('login test', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Daniel')
    await page.locator('[placeholder="Enter your password"]').fill('1234')

    await page.waitForSelector('text=Sign in', { timeout: 5000 })
    await page.locator('text=Sign in').click()
})

test ('login test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})