# News-App

A React-based News App that fetches and displays the latest news articles from various categories using the News API. The app supports infinite scrolling, category-based filtering, and a top-loading bar for a smooth user experience.

---

## Features

- **Category-Based News**: Browse news articles by categories such as Business, Entertainment, General, Health, Science, Sports, and Technology.
- **Infinite Scrolling**: Automatically load more articles as you scroll down.
- **Top Loading Bar**: Visual feedback for loading new content.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Routing**: Navigate between categories using React Router.
- **Environment Variables**: Securely manage API keys using `.env` files.

---

## Demo

![News App Screenshot](image.png)
![News App Screenshot](image2.png)
![News App Screenshot](image3.png)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GauriAyalane18/News-App.git
   cd News-App
   ```
2.Install dependencies:
   npm install

3.Create a .env file in the root directory and add your News API key:

   REACT_APP_NEWS_API_KEY=your_api_key_here

4.Start the development server:
   npm start

Usage:-
Open the app in your browser at http://localhost:3000.
Use the navigation bar to switch between news categories.
Scroll down to load more articles automatically.

Project Structure:
News-App/
├── public/                 
├── src/
│   ├── components/         
│   │   ├── Navbar.js       
│   │   ├── News.js         
│   │   ├── NewsItem.js     
│   │   ├── Spinner.js      
│   ├── App.js              
│   ├── index.js            
├── .env                    
├── .gitignore             
├── package.json            
└── [README.md](http://_vscodecontentref_/1)               

* Dependencies
React: Frontend framework.
React Router DOM: For navigation and routing.
React Top Loading Bar: For the top-loading progress bar.
News API: To fetch news articles.


---

### How to Use:
1. Replace `your_api_key_here` with your actual News API key in the `.env` section.
2. Add a screenshot of your app in the `Demo` section if available.

Let me know if you need further assistance!
