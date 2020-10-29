const { useReducer } = require('react');
const db = require('../models/rouletteModels');

const rouletteController = {};

rouletteController.createRoulette = (req, res, next) => {
  let insertData = `INSERT INTO roulette (choice1, choice2)
  VALUES ($1, $2) RETURNING _id`;
  let values = [req.body['0'], req.body['1']];
  // let insertData = `INSERT INTO roulette (choice1, choice2, choice3, choice4, choice5, choice6, choice7, choice8, choice9, choice10)
  // // VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING _id`;
  // let values = [req.body[0], req.body[1], req.body[2], req.body[3], req.body[4], req.body[5], req.body[6], req.body[7], req.body[8], req.body[9]];
  db.query(insertData, values)
  .then(data => {
    res.locals.roulette = data['rows'][0];
    return next();
  })
  .catch(err => {
    return next({
      log: 'rouletteController.createRoulette: ERROR: Error sending roulette data from database',
      message: { err: 'Error occurred in rouletteController.createRoulette. Check server logs for more details.'}
    })
  })
};

rouletteController.getRoulette = (req, res, next) => {
  let rouletteID = req.params.id;

  let findData = `SELECT * FROM roulette WHERE _id = ${rouletteID}`
  db.query(findData)
  .then(data => {
    res.locals.roulette = data['rows'];
    // console.log(rouletteID);
    // console.log(res.locals.roulette);
    return next();
  })

};

module.exports = rouletteController;
