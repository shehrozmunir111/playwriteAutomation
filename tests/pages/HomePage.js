export  class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCart = '//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur';
    }

    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
        for (const product of productList) {
            if (await product.textContent() === productName) {
                await product.click();
                break;
            }
        }
        await this.page.on('dialog', async (dialog) => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        });
        await this.page.locator(this.addToCart).click();
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
}