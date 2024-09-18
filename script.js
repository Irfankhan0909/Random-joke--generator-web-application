document.getElementById('fetchJoke').addEventListener('click', async function() {
    const url = 'https://official-joke-api.appspot.com/random_joke'; // Public API for random jokes
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Display the joke
        document.getElementById('jokeOutput').textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
        console.error('Error fetching the joke:', error);
        document.getElementById('jokeOutput').textContent = 'Oops! Could not fetch a joke.';
    }
});
