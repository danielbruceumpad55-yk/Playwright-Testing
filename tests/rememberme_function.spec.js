import { test, expect } from '@playwright/test'

test.describe('Remember Me Functionality', () => {
    test('Login Capture', async ({ page }) => {

        await page.goto('https://demo.applitools.com/')
        await page.pause()
        await page.locator('text=Remember me').click()
        await page.locator('[placeholder="Enter your username"]').fill('Daniel')
        await page.locator('[placeholder="Enter your password"]').fill('1234')

        await page.waitForSelector('text=Sign in', { timeout: 5000 })
        await page.locator('text=Sign in').click()
        await page.pause()

        await expect(page).toHaveURL('https://demo.applitools.com/app.html')
        await page.context().storageState({ path: "user.json" })
    })

    test('Remember Me Authentication', async ({ browser }) => {

        const context = await browser.newContext({ storageState: "user.json" })
        const page = await context.newPage()

        await page.goto('https://demo.applitools.com/app.html')

        await expect(page).toHaveURL('https://demo.applitools.com/app.html')
        await context.close()
    })

})