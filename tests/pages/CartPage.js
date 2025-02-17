export class CartPage {
    constructor(page) {
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductsInCart(productName) {
        const productsInCart = await this.page.$$(this.noOfProducts);
        
        // Iterate over the products to check if the productName matches any product
        for (const product of productsInCart) {
            const productText = await product.textContent();
            console.log(productText); // Log for debugging purposes
            
            // Check if the current product's text matches the expected product name
            if (productText && productText.trim() === productName) {
                return true;  // Product found, return true
            }
        }
        
        return false;  // Product not found, return false
    }
}
