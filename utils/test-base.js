const base = require('@playwright/test');

exports.customTest = base.test.extend(
    {
        testDataForOrder:
        {
            "username": "shehrozmunir111@gmail.com",
            "password": "Shehroz@123",
            "productName": "ZARA COAT 3"
        }
    })

