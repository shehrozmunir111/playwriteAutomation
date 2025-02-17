export class CartPage {
    constructor(page) {
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
    }
    async checkProductsInCart(productName) {
        const productsInCart = await this.page.$$(this.noOfProducts);
        for (const product of productsInCart) {
            console.log(await product.textContent());
            if (await product.textContent() === productName) {
                return true;
                break;
            }
        }
    }
}