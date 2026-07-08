# Paradise Nursery Shopping App

Paradise Nursery is a React and Redux shopping cart application for browsing houseplants, adding them to a cart, adjusting quantities, and viewing the total cost before checkout.

## Project features

- Landing page with background image, company name, company description, and Get Started button.
- Product listing page with 18 houseplants grouped into 3 categories.
- Add to Cart buttons that become disabled after selection.
- Header navigation on the product listing and cart pages.
- Dynamic cart icon showing the total number of items.
- Shopping cart page with plant thumbnails, names, unit prices, item totals, quantity controls, delete buttons, cart total, continue shopping button, and checkout placeholder.

## Technologies used

- React
- Redux Toolkit
- React Redux
- React Router
- Vite
- GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deployment

This project is ready for GitHub Pages deployment using the included GitHub Actions workflow.

After pushing to GitHub, go to:

Settings > Pages > Build and deployment > Source > GitHub Actions

## Submission file locations

Use public GitHub URLs for these files after pushing the repository:

- README.md
- src/components/AboutUs.jsx
- src/App.css
- src/App.jsx
- src/features/cart/CartSlice.jsx
- src/components/ProductList.jsx
- src/components/CartItem.jsx
