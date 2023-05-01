import BasePage from "./BasePage";

export default class LoginPage extends BasePage {

  constructor() {
    super()
    this.loginH2 = "//h2[contains(text(),'Login')]"
    this.inputEmail = "//*[@id='login']/div[1]/input"
    this.inputPassword = "//*[@id='login']/div[2]/input"
    this.submitButton = '(//*[@id="app"]/div/section[3]/div/div[2]/div/nav/button[2]'
    this.loginPageText = "//h2[contains(text(),'Hi,')]"
  }

  async visit() {
    await page.goto('https://demo.testim.io/login')
    await page.waitForXPath(this.loginH2)
    const url = this.getUrl()

    console.log('Visitando URL ', url)
  }

  async login(email, password) {
    await page.waitForSelector(this.inputEmail)
    await this.type(this.inputEmail, email)
    await this.type(this.inputPassword, password)
    await this.click(this.submitButton)
  }

  async validateLogin() {
    await page.waitForXPath(this.loginPageText)
    await page.waitForXPath(this.navBar)
  }



}