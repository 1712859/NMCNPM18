let controller = {};
let models = require('../models');
const { Sequelize } = require('../models');

controller.getChotGiaoThong = async() => {
    const review = await models.sequelize.query(`select * from ChotGiaoThongs where ma_ChotGT =1`, { type: models.Sequelize.QueryTypes.SELECT });
    return review
}

module.exports = controller;