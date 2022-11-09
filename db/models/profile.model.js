const { Model, DataTypes, Sequelize } = require('sequelize');
const PROFILE_TABLE = 'profiles';

const ProfileSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    country: {
        allowNull: false,
        type: DataTypes.STRING(4),
    },
    qrId: {
        field: 'qr_id',
        allowNull: false,
        type: DataTypes.STRING(7),
        unique: 'uniquePinId_IDX01'
    },
    pinId: {
        field: 'pin_id',
        allowNull: false,
        type: DataTypes.INTEGER(4),
        unique: 'uniquePinId_IDX01'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW,
    }
}

class Profile extends Model {
    static associate(models) {
        this.hasMany(models.PinIdProfile, {
            as: 'pinIdProfile',
            foreignKey: 'profileId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PROFILE_TABLE,
            modelName: 'Profile',
            timestamps: true
        }
    }
}

module.exports = { Profile, ProfileSchema, PROFILE_TABLE };
