const express = require('express');
const app = express();

// Respond to all requests with a simple message
app.get('/', (req, res) => {
    res.send('Hello from Aria Server!');
});

// You can also catch all other routes to ensure no 404 errors during tests
app.get('*', (req, res) => {
    res.send('Hello from Aria Server - Catch All Route!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
