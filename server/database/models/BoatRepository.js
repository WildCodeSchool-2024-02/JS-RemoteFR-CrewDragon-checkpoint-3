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

  async update(category) {
    // Execute the SQL UPDATE query to update a specific category

    const [result] = await this.database.query(
      `update ${this.table} set name = ? where id = ?`,

      [category.name, category.id]
    );

    // Return how many rows were affected

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
