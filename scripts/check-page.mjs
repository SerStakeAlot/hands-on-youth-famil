import { chromium } from 'playwright'

const url = process.argv[2] ?? 'https://serstakealot.github.io/hands-on-youth-famil/'
const browser = await chromium.launch()
const page = await browser.newPage()
page.on('console', (msg) => {
  console.log(`[browser console] ${msg.type().toUpperCase()}: ${msg.text()}`)
})
page.on('pageerror', (err) => {
  console.log('[browser pageerror]', err)
})
page.on('requestfailed', (req) => {
  console.log('[browser request failed]', req.url(), req.failure()?.errorText)
})
await page.goto(url, { waitUntil: 'networkidle' })
console.log('Page title:', await page.title())
await page.screenshot({ path: 'gh-page.png', fullPage: true })
await browser.close()
