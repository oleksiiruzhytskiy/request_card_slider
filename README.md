# request_card_slider

## Description
This is a React-based real estate project that displays properties in a grid layout with paginated results. Each property includes an image slider that dynamically adjusts image sizes based on the screen width.

## Features
- Fetches property listings from an external API.
- Implements an image slider that adapts image quality based on screen width.
- Uses pagination for easy navigation between listings.
- Displays key property details such as price, location, and size.

## Technologies Used
- React
- JavaScript (ES6+)
- CSS (for styling)
- Fetch API (for data fetching)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/request_card_slidert.git
   ```
2. Navigate to the project folder:
   ```sh
   cd request_card_slider
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
request_card_slider/
│-- src/
│   ├── components/
│   │   ├── App/
│   │   │   ├── App.js
│   │   ├── ImageSlider/
│   │   │   ├── ImageSlider.js
│   │   ├── Pagination/
│   │   │   ├── Pagination.js
│   │   ├── ProjectGrid/
│   │   │   ├── ProjectGrid.js
│   ├── index.js
│   ├── styles/
│-- public/
│-- package.json
│-- README.md
```

## API Configuration
The project fetches data from an API:
- **API URL:** `https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects`
- **Authentication:**
  - `accessKey`: A7gjfjj0WdBynt8d
  - `secretKey`: tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn
- **Pagination:** Enabled with `size` and `page` parameters.

## Usage
1. The project displays property listings in a grid format.
2. Users can navigate between pages using the pagination buttons.
3. Clicking on an image will show it in an image slider, which adjusts to different screen sizes.




