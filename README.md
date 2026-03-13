# Playwright E-commerce Automation (Flipkart)

## Project Overview
This project demonstrates end-to-end UI automation for an e-commerce platform using **Playwright with JavaScript** following the **Page Object Model (POM)** design pattern.

The test automates a real user journey without logging into the application, including product search, filtering, product selection, add-to-cart, and checkout validation.

## Tech Stack
* Playwright
* JavaScript
* Node.js
* Page Object Model (POM)
* Git & GitHub

## Test Scenario Automated
The following user flow is automated:
1. Open Flipkart website
2. Search for a product (Laptop)
3. Apply filters:
   * Brand: Lenovo
   * RAM: 32GB
   * Processor: Core i7
4. Sort by price (High to Low)
5. Open the first product
6. Add product to cart
7. Navigate to cart page
8. Click "Place Order"
9. Verify redirect to login page

## Project Architecture
The framework follows **Page Object Model (POM)** for maintainability.
playwright-ecommerce-automation
│
├── pages
│   ├── SearchPage.js
│   ├── SearchResultPage.js
│   ├── ProductDetailedPage.js
│   └── PlaceOrderPage.js
│
├── pageObject
│   └── POManager.js
│
├── tests
│   └── searchPage.spec.js
│
├── playwright.config.js
├── package.json
└── README.md

## Key Automation Features
* Page Object Model implementation
* Dynamic locator strategies
* Popup window handling
* Multi-page navigation handling
* Assertions using Playwright expect
* URL validations
* Robust element synchronization

## How to Run Tests
Install dependencies
npm install
npx playwright test
npx playwright test --headed

## Future Enhancements
* Cross-browser testing
* CI/CD integration with GitHub Actions
* Parallel execution
* Data-driven testing
* HTML reporting

## Author
Nivedha Rajendran
Automation Test Engineer
