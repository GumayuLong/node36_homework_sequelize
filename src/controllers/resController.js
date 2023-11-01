import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const getListRes = async (req, res) => {
    let data = await model.restaurant.findAll();

    res.send(data);
};

export {getListRes};