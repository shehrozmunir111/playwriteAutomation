# Playwright Automation Project

## Description

This project demonstrates automated testing using Playwright for web applications. It focuses on testing various web elements and interactions including dropdowns, checkboxes, input fields, alerts, frames, file uploads, screenshots, video recording, and assertions on demo websites.

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
   npm install --save-dev @playwright/test playwright
   ```

5. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Test Scripts

The project includes the following test files:

- **HomePageTest.spec.js**: Tests the DemoBlaze homepage functionality
  - Website: https://demoblaze.com/index.html
  - Title verification ("STORE")
  - URL verification
  - Logo visibility
  - Navigation links presence (Home, Contact, About us, Cart, Log in, Sign up)

- **Locators.spec.js**: Demonstrates different locator strategies
  - Website: https://demoblaze.com/index.html
  - Property locators (id=login2)
  - CSS locators (#loginusername)
  - XPath locators
  - Login/logout functionality testing with credentials

- **LocatingMultipleElements.spec.js**: Examples of handling multiple elements
  - Website: https://demoblaze.com/index.html
  - Finding and counting all links using $$('a')
  - Locating and processing multiple products
  - Element text extraction and logging

- **Locators_builtin.spec.js**: Shows usage of Playwright's built-in locators
  - Website: https://opensource-demo.orangehrmlive.com/
  - getByAltText() for logo
  - getByPlaceholder() for username/password
  - getByRole() for buttons
  - getByText() for verification

- **Codegen.spec.js**: Generated test script using Playwright's Codegen
  - Website: https://demoblaze.com/index.html
  - Auto-generated test steps
  - Record and playback functionality
  - Generated using `npx playwright codegen`
  - Demonstrates automated test recording capability

- **Assertions.spec.js**: Comprehensive assertion examples
  - Website: https://demo.nopcommerce.com/register
  - Title and URL assertions
  - Element visibility checks
  - Form control assertions (enabled, editable)
  - Dropdown options verification with counts

- **Assertions_soft.spec.js**: Demonstrates assertion types
  - Website: https://demoblaze.com/index.html
  - Hard assertions (immediate failure)
  - Soft assertions (continue on failure)
  - Page title and URL verification
  - Element visibility checks

- **InputBox_RadioButton.spec.js**: Tests form input interactions
  - Website: https://testautomationpractice.blogspot.com/
  - Input field validation (visible, empty, editable, enabled)
  - Radio button interactions (check, verify)
  - Element state verification (disabled, hidden)

- **Checkboxs.spec.js**: Tests checkbox functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Single checkbox interactions
  - Multiple checkbox handling with arrays
  - Checkbox state verification
  - Count and name extraction

- **Dropdowns.spec.js**: Tests dropdown functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Different selection methods (value, label, index)
  - Option counting approaches
  - Value presence verification
  - Dynamic option selection using loops

- **MultiSelectDropdown.spec.js**: Tests multi-select dropdown functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Multiple option selection
  - Option counting using different methods
  - Value verification using includes()

- **AutoSuggestDropdown.spec.js**: Tests auto-suggest dropdown functionality
  - Website: https://www.redbus.in/
  - Dynamic option handling
  - Search and selection
  - Text verification

- **HiddenDropdown.spec.js**: Tests hidden dropdown functionality
  - Website: https://opensource-demo.orangehrmlive.com/
  - Login and navigation
  - Hidden option handling
  - Dynamic selection
  - Value verification

- **AlertHandling.spec.js**: Tests alert dialog functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Alert with OK button
  - Confirmation dialog (OK/Cancel)
  - Prompt dialog with text input

- **HandleFrames.spec.js**: Tests iframe functionality
  - Website: https://ui.vision/demo/webtest/frames/
  - Frame handling
  - Inner frame handling
  - Frame interactions

- **WebTable.spec.js**: Tests web table functionality
  - Table data handling with loops
  - Product selection by text matching
  - Multiple product selection
  - Pagination handling

- **DatePicker.spec.js**: Tests date picker functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Direct date input
  - Date picker navigation
  - Month/year selection
  - Date validation

- **FilesUpload.spec.js**: Tests file upload functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Single file upload handling
  - Multiple files upload handling
  - Upload status verification
  - File name verification

- **MouseActions.spec.js**: Tests mouse interaction functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Mouse hover actions
  - Right-click interactions
  - Double-click handling
  - Drag and drop operations (two approaches)
    * Using dragTo() method
    * Manual dragging with mouse down/up events

- **KeyboardActions.spec.js**: Tests keyboard interaction functionality
  - Website: https://testautomationpractice.blogspot.com/
  - Keyboard typing
  - Key combinations (Ctrl+A, Ctrl+C)
  - Individual key actions (Tab)
  - Text manipulation with keyboard shortcuts
  - Copy and paste operations

- **Screenshot.spec.js**: Tests screenshot functionality
  - Website: https://demoblaze.com/index.html
  - Page screenshot capture
  - Login process screenshot
  - Automatic screenshot on failure (configured in playwright.config.js)
  - Screenshot storage in tests/screenshots directory

- **VideoRecording.spec.js**: Tests video recording functionality
  - Website: https://demoblaze.com/index.html
  - Full test session recording
  - Video capture configuration in playwright.config.js
  - Automatic video recording of test execution
  - Video storage in test-results directory

- **Hooks.spec.js**: Demonstrates test hooks functionality
  - Website: https://demoblaze.com/index.html
  - beforeAll hook for login setup
  - beforeEach hook for per-test initialization
  - afterEach hook for cleanup
  - afterAll hook for session cleanup
  - Login/logout automation using hooks

- **Grouping.spec.js**: Shows test organization using describe blocks
  - Test grouping by functionality
  - Nested describe blocks
  - Test suite organization
  - Shared setup and teardown
  - Focused and skipped test groups

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
│   ├── Codegen.spec.js
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
│   ├── WebTable.spec.js
│   ├── DatePicker.spec.js
│   ├── FilesUpload.spec.js
│   ├── MouseActions.spec.js
│   ├── KeyboardActions.spec.js
│   ├── Screenshot.spec.js
│   ├── VideoRecording.spec.js
│   ├── Hooks.spec.js
│   └── Grouping.spec.js
├── tests/screenshots/     # Directory for captured screenshots
├── tests/uploadFiles/     # Directory for test files used in upload tests
├── playwright-report/     # Test reports including screenshots and videos
├── test-results/         # Test execution results and recordings
├── node_modules/
├── playwright.config.js
├── package.json
└── .gitignore

```