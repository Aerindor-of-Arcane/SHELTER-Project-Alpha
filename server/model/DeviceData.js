module.exports = (sequelize, DataTypes) => {
    const DeviceData = sequelize.define('DeviceData', {
        resistance: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
    return DeviceData;
};