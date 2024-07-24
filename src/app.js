const express = require ('express')
const app = express()
const port = 8081
const knex = require('knex')(require('path/to/knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());

app.get('/', function(req, res) {
    response.send('Application is up and running')
//   knex('pet')
//     .select('*')
//     .then(data => res.status(200).json(data))
//     .catch(err =>
//       res.status(404).json({
//         message:
//           'The data you are looking for could not be found. Please try again'
//       })
//     );
});

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});