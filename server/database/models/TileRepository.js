const AbstractRepository = require("./AbstractRepository");

class TileRepository extends AbstractRepository {
  constructor() {
    super({ table: "tile" });
  }

  async readByCoordinates(coordX, coordY) {
    if (coordX < 0 || coordX > 11 || coordY < 0 || coordY > 5) {
      return [];
    }

    const query = `SELECT * FROM ${this.table} WHERE coordX = ? AND coordY = ?`;
    const [rows] = await this.database.query(query, [coordX, coordY]);

    return rows;
  }

  async getRandomIsland() {
    const [rows] = await this.database.query(
      `select id from ${this.table} where type="island" order by rand() limit 1`
    );

    return rows[0];
  }

  async hideTreasure(island) {
    const [result] = await this.database.query(
      `update ${this.table} set has_treasure =
        case
          when id = ? then true
          else false
        end`,
      [island.id]
    );

    return result;
  }
}

module.exports = TileRepository;
