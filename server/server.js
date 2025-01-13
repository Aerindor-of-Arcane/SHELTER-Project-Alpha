const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { DeviceData } = require('./models');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to save data
app.post('/api/data', async (req, res) => {
    try {
        const { resistance, timestamp } = req.body;
        const newData = await DeviceData.create({ resistance, timestamp });
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

app.use('/api/auth', authRoutes)

// Endpoint to fetch data
app.get('/api/data', async (req, res) => {
    try {
        const data = await DeviceData.findAll({ order: [['timestamp', 'DESC']] });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));