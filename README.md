# Playwright Automation Project

## Description

This project demonstrates automated testing using Playwright for web applications. It focuses on testing various web elements and interactions including dropdowns, checkboxes, input fields, alerts, frames, and assertions on demo websites.

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
   Set-ExecutionPolicy -Scope LocalMachine -ExecutionPolicy RemoteSigned
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

- **HomePageTest.spec.js**: Tests the DemoBlaze homepage functionality
  - Website: https://demoblaze.com/index.html
  - Title verification
  - URL verification
  - Logo visibility
  - Navigation links presence

- **Locators.spec.js**: Demonstrates different locator strategies
  - Website: https://demoblaze.com/index.html
  - Property locators
  - CSS locators
  - XPath locators
  - Login/logout functionality testing

- **LocatingMultipleElements.spec.js**: Examples of handling multiple elements
  - Website: https://demoblaze.com/index.html
  - Finding all links on a page
  - Locating and processing multiple products
  - Element text extraction

- **Locators_builtin.spec.js**: Shows usage of Playwright's built-in locators
  - Website: https://demoblaze.com/index.html
  - getByAltText()
  - getByPlaceholder()
  - getByRole()
  - getByText()

- **Assertions.spec.js**: Comprehensive assertion examples
  - Website: https://demo.nopcommerce.com/register
  - Title assertions
  - URL assertions
  - Element visibility checks
  - Form control assertions
  - Dropdown options verification

- **Assertions_soft.spec.js**: Demonstrates assertion types
  - Website: https://demoblaze.com/index.html
  - Hard assertions
  - Soft assertions
  - Page title and URL verification
  - Element visibility checks

- **InputBox_RadioButton.spec.js**: Tests form input interactions
  - Website: https://testautomationpractice.blogspot.com/
  - Input field validation
  - Radio button interactions
  - Element state verification

- **Checkboxs.spec.js**: Tests checkbox functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Single checkbox interactions
  - Multiple checkbox handling
  - Checkbox state verification

- **Dropdowns.spec.js**: Tests dropdown functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Different selection methods
  - Option counting
  - Value presence verification
  - Dynamic option selection

- **MultiSelectDropdown.spec.js**: Tests multi-select dropdown functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Multiple option selection
  - Option counting
  - Value verification

- **AutoSuggestDropdown.spec.js**: Tests auto-suggest dropdown functionality
  - Website: https://www.redbus.in/
  - Dynamic option handling
  - Search and selection
  - Text verification

- **HiddenDropdown.spec.js**: Tests hidden dropdown functionality
  - Website: https://opensource-demo.orangehrmlive.com/
  - Hidden option handling
  - Dynamic selection
  - Value verification

- **AlertHandling.spec.js**: Tests alert dialog functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Alert with OK
  - Confirmation dialog
  - Prompt dialog

- **HandleFrames.spec.js**: Tests iframe functionality
  - Website: https://ui.vision/demo/webtest/frames/
  - Frame handling
  - Inner frame handling
  - Frame interactions

- **WebTable.spec.js**: Tests web table functionality
  - Website: https://datatables.net/examples/api/multi_filter.html
  - Table data handling
  - Pagination
  - Data verification

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
  npx playwright test filename.spec.js --project=chromium
  ```

- Run tests in debug mode:
  ```bash
  npx playwright test filename.spec.js --project=chromium --headed --debug
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
│   ├── Dropdowns.spec.js
│   ├── MultiSelectDropdown.spec.js
│   ├── AutoSuggestDropdown.spec.js
│   ├── HiddenDropdown.spec.js
│   ├── AlertHandling.spec.js
│   ├── HandleFrames.spec.js
│   └── WebTable.spec.js
├── playwright-report/
├── test-results/
├── node_modules/
├── playwright.config.js
└── package.json

```

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
