const { DeviceData } = require('../models');

// Fetch all data
exports.getAllData = async (req, res) => {
    try {
        const data = await DeviceData.findAll({ order: [['timestamp', 'DESC']] });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
};

// Create mock data (for seeding purposes)
exports.createMockData = async (req, res) => {
    try {
        const { resistance, timestamp } = req.body;
        const newData = await DeviceData.create({ resistance, timestamp });
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
};