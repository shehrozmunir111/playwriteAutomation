# Playwright Automation Project

## Description

This project demonstrates automated testing using Playwright for web applications. It focuses on testing various web elements and interactions including dropdowns, checkboxes, input fields, and assertions on demo websites.

## Prerequisites

- Node.js: Download and install from [Node.js official site](https://nodejs.org/en/download/)
- VS Code/Cursor (recommended IDE)

## Installation

If you're cloning this repository, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/playwriteautomation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd playwriteautomation
   ```

3. If you encounter execution policy errors in PowerShell:
   ```bash
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```

4. Install dependencies:
   ```bash
   npm install --save-dev playwright
   ```

5. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Test Scripts

The project includes the following test files:

- **HomePageTest.spec.js**: Tests the DemoBlaze homepage functionality:
  - Title verification
  - URL verification
  - Logo visibility
  - Navigation links presence

- **Locators.spec.js**: Demonstrates different locator strategies:
  - Property locators
  - CSS locators
  - XPath locators
  - Login/logout functionality testing

- **Locators_builtin.spec.js**: Shows usage of Playwright's built-in locators:
  - getByRole()
  - getByText()
  - getByPlaceholder()
  - getByAltText()

- **LocatingMultipleElements.spec.js**: Examples of handling multiple elements:
  - Finding all links on a page
  - Locating and processing multiple products
  - Element text extraction

- **Assertions.spec.js**: Comprehensive assertion examples:
  - Title assertions
  - URL assertions
  - Element visibility checks
  - Form control assertions
  - Dropdown options verification

- **Assertions_soft.spec.js**: Demonstrates assertion types:
  - Hard assertions
  - Soft assertions
  - Page title and URL verification
  - Element visibility checks

- **InputBox_RadioButton.spec.js**: Tests form input interactions:
  - Input field validation
  - Radio button interactions
  - Element state verification

- **Checkboxs.spec.js**: Tests checkbox functionality:
  - Single checkbox interactions
  - Multiple checkbox handling
  - Checkbox state verification

- **Dropdowns.spec.js**: Tests dropdown functionality:
  - Different selection methods
  - Option counting
  - Value presence verification
  - Dynamic option selection

## Running Tests

### Basic Commands

- Run all tests:
  ```bash
  npx playwright test
  ```

- Run tests with browser visible:
  ```bash
  npx playwright test --headed
  ```

- View test report:
  ```bash
  npx playwright show-report
  ```

### Running Specific Tests

- Run tests in Chrome only:
  ```bash
  npx playwright test --project=chromium
  ```

- Run a specific test file:
  ```bash
  npx playwright test HomePageTest.spec.js --project=chromium
  ```

- Run tests in debug mode:
  ```bash
  npx playwright test HomePageTest.spec.js --project=chromium --headed --debug
  ```

## Project Structure

```
playwriteautomation/
├── tests/
│   ├── HomePageTest.spec.js
│   ├── Locators.spec.js
│   ├── Locators_builtin.spec.js
│   ├── LocatingMultipleElements.spec.js
│   ├── Assertions.spec.js
│   ├── Assertions_soft.spec.js
│   ├── InputBox_RadioButton.spec.js
│   ├── Checkboxs.spec.js
│   └── Dropdowns.spec.js
├── playwright-report/
├── test-results/
├── node_modules/
├── playwright.config.js
└── package.json

```

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
