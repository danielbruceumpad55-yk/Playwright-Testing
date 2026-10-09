

const{chromium,expect}=require('@playwright/test')
module.exports = async config => {
    const browser = await chromium.launch({headless:false})
    const page = await browser.newPage()
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
        await browser.close()
    }