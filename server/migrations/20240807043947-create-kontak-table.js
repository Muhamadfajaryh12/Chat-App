"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "contact",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      id_user_1: { type: "int", notNull: true },
      id_user_2: { type: "int", notNull: true },
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("contacts", callback);
};

exports._meta = {
  version: 1,
};
