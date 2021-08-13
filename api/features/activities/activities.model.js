const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const Activities = sequelizeClient.define('activities', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    category: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    detail: {
      type: Sequelize.STRING,
      allowNull: false
    },
    thumbnailUrl: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });
  return Activities
}




