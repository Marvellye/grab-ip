const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
    // Get client IP address
    const ipList = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const mainIp = ipList.split(',')[0].trim();

    // Check for format query parameter
    const format = req.query.format;

    if (format === 'json') {
        res.json({ ip: mainIp });
    } else {
        res.send(mainIp);
    }
});

app.listen(port, () => {
    console.log(`Grab IP Server running at http://localhost:${port}`);
});
