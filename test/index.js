const puppeteer = require('puppeteer')
const source = require('./command.json')
const sideex2puppeteer = require('../index')

const puppeteerCommand = source.forEach(((s) => {
  // sideex2puppeteer...
})

[
  "await pup",
  "puppeteer.goto()"

/*
[{
  "command": "open",
  "target": "https://www.baidu.com/",
  "value": ""
}, {
  "command": "clickAt",
  "target": "id=kw",
  "value": "264,10"
}, {
  "command": "type",
  "target": "id=kw",
  "value": "sda"
}, {
  "command": "submit",
  "target": "id=form",
  "value": ""
}] */

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto()
})()
