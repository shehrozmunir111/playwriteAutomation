class DashboardPage
{
constructor(page)
{
    this.page = page;
    this.products = page.locator(".card-body");
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");

}

async searchProductAddCart(productName)
{
    // Wait for products to load
    await this.page.locator(".card-body").first().waitFor({ state: 'visible' });
    
    // Case-insensitive search
    const productCount = await this.products.count();
    for(let i = 0; i < productCount; ++i) {
        const itemText = await this.products.nth(i).locator("b").textContent();
        if(itemText.toLowerCase() === productName.toLowerCase()) {
            // Add to cart with confirmation
            await this.products.nth(i).locator("text= Add To Cart").click();
            await this.page.locator("text= Product Added To Cart ").waitFor();
            return;
        }
    }
    throw new Error(`Product "${productName}" not found`);
}

async navigateToOrders()
{
    await this.orders.click();
}


async navigateToCart()
{
    await this.cart.click();
}

}
module.exports = {DashboardPage};