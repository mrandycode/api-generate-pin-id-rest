
const { PinIdProfile, PinIdUserSchema } = require('./pin-id.model');
const { Profile, ProfileSchema  } = require('./profile.model');

function setupModels(sequelize) {
    Profile.init(ProfileSchema, Profile.config(sequelize));
    PinIdProfile.init(PinIdUserSchema, PinIdProfile.config(sequelize));

    Profile.associate(sequelize.models);
    PinIdProfile.associate(sequelize.models);
}

module.exports = setupModels;