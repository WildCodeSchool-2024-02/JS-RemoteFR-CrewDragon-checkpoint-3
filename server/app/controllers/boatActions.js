const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Rechercher un bateau dans la base de données
    const boat = await tables.boat.read();

    if (boat) {
      // Envoyer le bateau trouvé sous forme JSON
      return res.json(boat);
    }
    // Envoyer le statut 204 si aucun bateau n'est trouvé
    return res.sendStatus(204);
  } catch (err) {
    // Gérer les erreurs
    next(err);
  }

  return null;
};

module.exports = {
  browse,
  read,
};
