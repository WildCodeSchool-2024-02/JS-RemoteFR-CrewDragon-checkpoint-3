const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    const query = `
      SELECT boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure
      FROM boat
      INNER JOIN tile ON  boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y
    `;
    const [rows] = await this.database.query(query);

    return rows;
  }
}

module.exports = BoatRepository;
