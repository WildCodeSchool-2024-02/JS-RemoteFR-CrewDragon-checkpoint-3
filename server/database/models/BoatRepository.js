const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of boats
    return rows;
  }

  async getRandomBoat() {
    const [rows] = await this.database.query(
      `select id, name from ${this.table} where type="boat" order by rand() limit 1`
    );

    return rows[0];
  }

  async hideTreasure(boat) {
    const [result] = await this.database.query(
      `update ${this.table} set has_treasure =
        case
          when id = ? then true
          else false
        end`,
      [boat.id]
    );

    return result;
  }
}

module.exports = BoatRepository;
