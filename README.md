# News Application

- A single-page application to display the latest news in Ukraine

## Project Overview
- The application fetches the latest news from a remote server and displays them in a user-friendly interface. Users can open news articles, view images, filter news, and save articles as bookmarks.

### Features

#### Basic Design Implementation
- The application follows a simple, clean design to display the list of news items.

#### Data Fetching from Server
- News data is fetched from the NewsAPI using an API key.

#### Open News in Browser
- Users can open a news article in their browser by clicking on the item.

#### Image Loading
- Each news item includes an image. If an image URL is present, it is fetched and displayed. If not, a placeholder image is shown.

#### News Filtering
- Users can filter news based on a search phrase. If no phrase is provided, all news items are displayed.

#### Bookmarking News
- Users can save news articles as bookmarks. These bookmarks are stored locally on the user's device.

#### Tabbed View for News and Bookmarks
- The application includes a tabbed view allowing users to switch between all news and their saved bookmarks.

### Technologies Used
- React for building the user interface
- TypeScript for type safety
- SCSS for styling
- Axios for HTTP requests
- LocalStorage for saving bookmarks

### Running the Project
- Clone the repository.
- Install dependencies: npm install.
- Start the project: npm start.
- Open http://localhost:3000 in your browser.
