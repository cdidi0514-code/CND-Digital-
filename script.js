// DOM Elements
const jokeText = document.getElementById('joke-text');
const jokeType = document.getElementById('joke-type');
const getJokeBtn = document.getElementById('get-joke-btn');
const copyBtn = document.getElementById('copy-btn');
const jokeCount = document.getElementById('joke-count');

// State
let currentJoke = '';
let jokesLoaded = 0;

// JokeAPI endpoints
const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Any';

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    getJokeBtn.addEventListener('click', fetchJoke);
    copyBtn.addEventListener('click', copyToClipboard);
    loadJokesCount();
});

/**
 * Fetch a random joke from JokeAPI
 */
async function fetchJoke() {
    // Disable button and show loading state
    getJokeBtn.disabled = true;
    getJokeBtn.textContent = 'Loading...';
    jokeText.textContent = 'Fetching a joke...';
    jokeType.textContent = '';

    try {
        const response = await fetch(JOKE_API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Check if joke was found
        if (data.error) {
            showError('Could not fetch joke. Please try again.');
            return;
        }

        // Format the joke based on type
        if (data.type === 'twopart') {
            currentJoke = `${data.setup}\n\n${data.delivery}`;
            jokeText.textContent = `${data.setup}\n\n${data.delivery}`;
        } else {
            currentJoke = data.joke;
            jokeText.textContent = data.joke;
        }

        // Display joke category and type
        const category = data.category || 'General';
        const type = data.type === 'twopart' ? 'Two-Part' : 'Single';
        jokeType.textContent = `Category: ${category} | Type: ${type}`;

        // Increment counter and save
        jokesLoaded++;
        localStorage.setItem('jokesCount', jokesLoaded);
        jokeCount.textContent = jokesLoaded;

        // Show success feedback
        showSuccess('Joke loaded!');

    } catch (error) {
        console.error('Error fetching joke:', error);
        showError(`Error: ${error.message}. Please check your internet connection.`);
    } finally {
        // Re-enable button
        getJokeBtn.disabled = false;
        getJokeBtn.textContent = 'Get a Joke';
    }
}

/**
 * Copy current joke to clipboard
 */
function copyToClipboard() {
    if (!currentJoke) {
        showError('No joke to copy. Get a joke first!');
        return;
    }

    navigator.clipboard.writeText(currentJoke).then(() => {
        showSuccess('Joke copied to clipboard!');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Joke';
        }, 2000);
    }).catch(() => {
        showError('Failed to copy. Try again.');
    });
}

/**
 * Show error message
 */
function showError(message) {
    jokeText.textContent = message;
    jokeType.textContent = '';
    jokeText.style.color = '#dc3545';
}

/**
 * Show success message temporarily
 */
function showSuccess(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    document.querySelector('.joke-card').insertBefore(messageDiv, document.querySelector('.joke-display'));
    
    setTimeout(() => {
        messageDiv.remove();
    }, 2000);
}

/**
 * Load jokes count from localStorage
 */
function loadJokesCount() {
    const savedCount = localStorage.getItem('jokesCount');
    if (savedCount) {
        jokesLoaded = parseInt(savedCount, 10);
        jokeCount.textContent = jokesLoaded;
    }
}

/**
 * Reset counter (optional helper function)
 */
function resetCounter() {
    jokesLoaded = 0;
    localStorage.removeItem('jokesCount');
    jokeCount.textContent = '0';
}
