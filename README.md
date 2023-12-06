# News App

Stay informed with our News App, a dynamic platform designed to provide users with top headlines and personalized news experiences. This app utilizes Firebase for user authentication and data storage, offering features such as:

## Important Note

**Please Note:** The News API used in this project is on a free plan, and it may have limitations in a **production environment**.

For a seamless and production-ready experience, consider upgrading to a paid plan or using an alternative news API service.

Thank you for your understanding!


## Features

### User Authentication

- **Login:** Seamlessly log in to your account using Firebase Authentication.
- **Register:** Create a new account to unlock personalized news preferences and features.
- **Google Login:** User can also create account using google.

### Personalized News Experience

- **Top Headlines:** Access curated top headlines for a quick overview of current events.
- **Search Queries:** Explore news articles based on your specific search queries.

### Favorites

- **Add to Favorites:** Save your favorite articles with a simple click, securely stored using Firebase Firestore.

## Prerequisites

- Node.js and npm installed
- Firebase project set up
- News api key

## Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/news-app.git
   cd news-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
- Set up a Firebase project and obtain your Firebase configuration.
- Create a .env file in the root of your project with Firebase configuration and news api key.

4. **Run the App:**
   ```bash
   npm start
   ```

- Open the app in your web browser at http://localhost:5173


## API Reference

- [Firebase Authentication API](https://firebase.google.com/docs/auth)
- [News API Documentation](https://newsapi.org/docs/endpoints/everything)

## Roadmap

- [ ]  Enhance search functionality
- [ ]  Add Infinite scroll

## Contributing

- Contributions are welcome! If you encounter issues or have suggestions, feel free to open issues or submit pull requests.

## License

- This project is licensed under the MIT License. Please review the license before using or contributing to the project.