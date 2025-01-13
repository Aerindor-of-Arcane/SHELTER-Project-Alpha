const bcrypt = require('bcrypt');
const sequelize = require('../config/database');
const User = require('../models/userModel');

const seedUsers = async () => {
    await sequelize.sync({ force: true }); // Resets the database
    // Mock testers
    const users = [
        { username: 'testuser1', password: 'password123' },
        { username: 'testuser2', password: 'password456' },
    ];

    for (const user of users) {
        user.passwordHash = await bcrypt.hash(user.password, 10);
        delete user.password; // Remove plain text password
        await User.create(user);
    }

    console.log('Users seeded successfully!');
    process.exit();
};

seedUsers();