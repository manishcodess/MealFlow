# MealFlow UI (React + Parcel)

![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white)
![Parcel](https://img.shields.io/badge/Parcel-2-DAA520?style=for-the-badge&logo=parcel&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Learning%20Project-2563EB?style=for-the-badge)

A frontend learning project for a food delivery interface with home discovery, restaurant listing, and menu browsing.

## Live Preview

- Live demo: add your deployed link here
- Local URL: `http://localhost:1234`

## Highlights

- Multi-page routing with dynamic URL params
- Component-based UI split by feature areas
- Local mock data for food, grocery, dineout, restaurants, and menu
- Fast development workflow using Parcel

## Tech Stack

- React 19
- Parcel 2
- React Router
- Tailwind CSS 4

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

The app starts on `http://localhost:1234` by default.

### 3. Build for production

```bash
npm run build
```

Parcel generates the production output in `dist/`.

## Available Routes

- `/` -> Home page
- `/restaurant` -> Restaurant listing
- `/city/delhi/:id` -> Restaurant menu page (dynamic id)

Routes are configured in `src/app.jsx`.

## Project Structure

```text
mealflow/
	index.html
	package.json
	Readme.md
	tester.html
	src/
		app.jsx
		index.css
		components/
		utilities/
		swiggyapi/
	srcmore/
		componentsmore/
		utilitiesmore/
	srcpizza/
		Componentspizza/
		Utilitiespizza/
```

## Screenshots

Add your images after you run the app and capture a few sections.

```text
assets/
	home.png
	restaurants.png
	menu.png
```

Then use them in this README:

```md
![Home](assets/home.png)
![Restaurants](assets/restaurants.png)
![Menu](assets/menu.png)
```

## Demo GIF

Record a short 10-20 second flow (home -> restaurant list -> menu) and place it in:

```text
assets/demo.gif
```

Then embed:

```md
![App Demo](assets/demo.gif)
```

## Where Data Comes From

The current UI is powered by local mock data files:

- `src/utilities/Fooddata.js`
- `src/utilities/Grocerydata.js`
- `src/utilities/Dinedata.jsx`
- `srcmore/utilitiesmore/Restaurantdatamore.jsx`
- `srcpizza/Utilitiespizza/Pizzadata.jsx`

This makes development predictable without depending on external APIs.

## Troubleshooting

### Port already in use

```bash
npm run dev -- --port 3000
```

### Tailwind styles not loading

- Ensure `src/index.css` contains `@import "tailwindcss";`
- Ensure `index.html` imports `./src/index.css`

### Direct route refresh fails on hosting

For nested routes like `/city/delhi/123`, configure SPA fallback rewrites on your hosting provider.

## Learning Focus

This project is ideal for practicing:

- React component composition
- Route-driven UI patterns
- Working with mock data before API integration
- Organizing medium-size frontend projects

## Next Improvements

- Fetch live data and map menu by route `id`
- Add search and filter controls on restaurant listing
- Add loading and error states across routes
- Add a not-found route and route-level boundaries

## Author

- Name: Manish
- Role: Frontend Learner
- Project: MealFlow UI

## Connect

- GitHub: add your GitHub profile link
- LinkedIn: add your LinkedIn profile link
- Portfolio: add your portfolio link

Start: index.html — confirm app mount and scripts. See index.html
App entry: app.jsx — app structure, routing, providers. See app.jsx
Auth/context: AuthContext.jsx — auth flow and global state. See AuthContext.jsx
Routing guard: ProtectedRoute.jsx — route protection logic. See ProtectedRoute.jsx
Layout: Header.jsx and Footer.jsx — navigation, global links. See Header.jsx and Footer.jsx
Home & skeleton: Home.jsx and Shimmer.jsx — main landing and loading UX. See Home.jsx and Shimmer.jsx
Restaurant flow: Restaurant.jsx, RestCard.jsx, and src/RestCard.jsx in srcmore — list → detail → cards. See Restaurant.jsx and RestCard.jsx
Feature components: DineCard.jsx, Foodoption(s).jsx, Groceryoption(s).jsx, Download.jsx — UI patterns and props. See DineCard.jsx
Auth pages: Login.jsx, Signup.jsx — form handling and validation. See Login.jsx and Signup.jsx
Data & API: swiggyapi/swiggy.json, utilities/Fooddata.js, Dinedata.jsx, Grocerydata.js — sample data shape and usage. See swiggyapi/swiggy.json and Fooddata.js
Styles: index.css — global styles and variables. See index.css
Extras: srcmore and srcpizza — additional demos/variants to merge or reuse. See srcmore and srcpizza
