const { Item } = require("../models");
const { Op } = require("sequelize");

async function GetAllItem() {
  try {
    const items = await Item.findAll({
      where: { [Op.not]: { deleted_at: null } },
    });

    return items;
  } catch (error) {
    console.log("Terjadi error di repository " + error);
    throw error;
  }
}

async function InsertItem(payload) {
  try {
    const item = await Item.create({
      item_name: payload.item_name,
      qty: payload.qty,
      price: payload.qty,
      createdAt: new Date(),
    });

    return item;
  } catch (error) {
    console.log("Terjadi error di repository " + error);
    throw error;
  }
}

async function GetItemByID(idItem) {
  try {
    const item = await Item.findAll({
      where: { [Op.and]: [{ [Op.not]: { deleted_at: null } }, { id: idItem }] },
    });

    return item;
  } catch (error) {
    console.log("Terjadi error di repository " + error);
    throw error;
  }
}

async function UpdateItemm(payload, idItem) {
  try {
    const item = await Item.update(
      {
        item_name: payload.item_name,
        qty: payload.qty,
        price: payload.qty,
        updatedAt: new Date(),
      },
      {
        where: {
          [Op.and]: [{ [Op.not]: { deleted_at: null } }, { id: idItem }],
        },
      }
    );

    return item;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
}

async function DeleteItem(idItem) {
  try {
    const item = await Item.update(
      {
        deleted_at: new Date(),
      },
      {
        where: {
          [Op.and]: [{ [Op.not]: { deleted_at: null } }, { id: idItem }],
        },
      }
    );

    return item;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
}

module.exports = {
  GetAllItem,
  GetItemByID,
  UpdateItemm,
  DeleteItem,
};
