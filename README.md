# Random Joke Generator 😂

A fun and interactive web application that fetches random jokes from an external API and displays them in a beautiful, responsive interface.

## Features

- 🎲 **Random Joke Fetching**: Get unlimited random jokes with a single click
- 📋 **Copy to Clipboard**: Easily copy jokes to share with friends
- 📊 **Joke Counter**: Track how many jokes you've loaded (saved in browser)
- 🎨 **Beautiful UI**: Modern gradient design with smooth animations
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Loading**: Efficient API calls with loading states
- 🌐 **External API Integration**: Uses JokeAPI for diverse joke content

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Gradients, Animations
- **JavaScript (ES6+)**: Async/Await, Fetch API, DOM Manipulation
- **JokeAPI**: External joke data source

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (to fetch jokes from API)

### Installation

1. Clone or download this repository
2. Navigate to the project folder
3. Open `index.html` in your web browser

```bash
# Simple method - just open the file
open index.html  # macOS
start index.html # Windows
```

Or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using Live Server in VS Code
# Install Live Server extension and click "Go Live"
```

Then visit `http://localhost:8000` in your browser.

## Usage

1. **Get a Joke**: Click the "Get a Joke" button to fetch a random joke
2. **View Details**: See the joke category and type (single or two-part)
3. **Copy Joke**: Use the "Copy Joke" button to copy to clipboard
4. **Track Progress**: Watch your joke counter increase with each new joke

## API Details

### JokeAPI
- **Base URL**: `https://v2.jokeapi.dev/joke/Any`
- **Documentation**: [JokeAPI Docs](https://jokeapi.dev/)
- **Response Types**:
  - Single: One-liner jokes
  - Two-part: Setup and delivery format
- **Categories**: Programming, Knock-Knock, General, Misc, Dark, Pun, Spooky, Christmas

## Features Explained

### Joke Display
- Automatically formats jokes based on type
- Shows category and joke type for context
- Clean, readable layout with proper spacing

### Local Storage
- Automatically saves your joke count
- Persists across browser sessions
- Completely client-side (no backend needed)

### Error Handling
- Network error detection
- API failure handling
- User-friendly error messages

### Responsive Design
- Mobile-first approach
- Adapts to any screen size
- Touch-friendly buttons

## Customization

### Change Joke Category
Modify the `JOKE_API_URL` in `script.js`:

```javascript
// For programming jokes only
const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Programming';

// For multiple categories
const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Programming,Knock-Knock';
```

### Customize Colors
Edit the gradient colors in `styles.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Change to your preferred colors */
```

### Add Dark Mode
You can extend `styles.css` with dark mode preferences:

```css
@media (prefers-color-scheme: dark) {
    body {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    }
    /* Add more dark mode styles */
}
```

## Project Structure

```
joke-generator/
├── index.html      # HTML structure
├── styles.css      # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- API calls are asynchronous and non-blocking
- Loading states prevent duplicate requests
- LocalStorage used for efficient data persistence
- Optimized animations for smooth performance

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Filter jokes by category dropdown
- [ ] Share jokes on social media
- [ ] Favorite jokes feature
- [ ] Jokes history
- [ ] Multiple language support
- [ ] Sound effects
- [ ] Keyboard shortcuts (e.g., Space to get joke)

## Troubleshooting

### Jokes not loading?
- Check your internet connection
- Verify the API is accessible (visit `https://v2.jokeapi.dev/joke/Any`)
- Check browser console for error messages (F12)
- Try clearing browser cache

### Copy button not working?
- Ensure HTTPS or localhost (clipboard API requires secure context)
- Check browser permissions for clipboard access
- Try a different browser

### Counter not saving?
- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Check browser console for storage errors

## License

This project is open source and available under the MIT License.

## Credits

- Joke API: [JokeAPI by Sv443](https://jokeapi.dev/)
- Icons: Emoji
- Inspiration: Community feedback

## Support

For issues, suggestions, or improvements, please create an issue in the repository or contact the developer.

---

**Made with ❤️ by CND-Digital**

Enjoy laughing! 😂
