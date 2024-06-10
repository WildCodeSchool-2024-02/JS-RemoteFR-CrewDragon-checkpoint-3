const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table

    if (where == null) {
      const [rows] = await this.database.query(
        `select boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.has_treasure FROM ${this.table} JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y `
      );
      return rows;
    }
    const [rows] = await this.database.query(
      `select boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.has_treasure FROM ${this.table} JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y WHERE boat.name=?`,
      [where.name]
    );
    return rows;

    // Return the array of boats
  }

  async update(boat) {
    // La desctructuration
    const [rows] = await this.database.query(
      `update ${this.table} set coord_x=?, coord_y=? where id=?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );

    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
