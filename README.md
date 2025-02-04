# Playwright Automation Project

## Description

This project is a Playwright-based automation suite designed to test various functionalities of web applications. It includes tests for navigation, locators, assertions, and more.

## Prerequisites

- Node.js: Ensure you have Node.js installed. You can download it from [Node.js official site](https://nodejs.org/en/download/).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/playwriteautomation.git
   ```
2. Navigate to the project directory:
   ```bash
   cd playwriteautomation
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the Playwright tests, use the following commands:

- Run all tests:
  ```bash
  npx playwright test
  ```

- Run tests in headed mode:
  ```bash
  npx playwright test --headed
  ```

- Show the test report:
  ```bash
  npx playwright show-report
  ```

## Test Scripts

- **HomePageTest.spec.js**: Tests the homepage of the website.
- **Locators.spec.js**: Demonstrates the use of different locators.
- **Assertions.spec.js**: Contains various assertion examples.
- **LocatingMultipleElements.spec.js**: Shows how to locate multiple elements on a page.
- **Locators_builtin.spec.js**: Uses built-in locators for element selection.
- **Codegen.spec.js**: Generated script using Playwright's codegen tool.

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
