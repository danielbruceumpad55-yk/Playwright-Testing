
import { test, expect } from '@playwright/test'

test.describe('Remember Me Functionality', () => {
    test('Remember Me Authentication', async ({ browser }) => {

        //const context = await browser.newContext({ storageState: "user.json" })
        //const page = await context.newPage()

        await page.goto('https://demo.applitools.com/app.html')

        await expect(page).toHaveURL('https://demo.applitools.com/app.html')
        await context.close()
    })
})