const {test, expect} = require('@playwright/test');
class CartPage
{
constructor(page)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}

async VerifyProductIsDisplayed(productName)
{
   
    await this.cartProducts.waitFor();
    const bool =await this.getProductLocator(productName).isVisible();
    expect(bool).toBeTruthy();

}

async Checkout()
{
    await this.checkout.click();
}

 getProductLocator(productName)
{
    return  this.page.locator("h3:has-text('"+productName+"')");
}

async verifyCartNotEmpty() {
    await expect(this.page.locator("div li")).toHaveCountGreaterThan(0);
}

async verifyCartContents(expectedProduct) {
    await this.page.locator("div li").first().waitFor();
    const cartItems = await this.page.locator("div li").allTextContents();
    const hasProduct = cartItems.some(item => 
        item.toLowerCase().includes(expectedProduct.toLowerCase())
    );
    expect(hasProduct).toBeTruthy();
}

}
module.exports = {CartPage};