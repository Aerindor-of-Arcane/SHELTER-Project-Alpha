const { faker } = require('@faker-js/faker');
const { DeviceData, sequelize } = require('../models');

const seedMockData = async (count = 100) => {
    const mockData = [];

    for (let i = 0; i < count; i++) {
        mockData.push({
            resistance: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
            timestamp: faker.date.recent(7),
        });
    }

    try {
        await sequelize.sync({ force: true }); // Clear existing data
        await DeviceData.bulkCreate(mockData); // Seed mock data
        console.log(`${count} mock records added.`);
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedMockData(10);