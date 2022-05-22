import app from './startup/app.js';
import database from './startup/database.js';
import config from './config/config.js';

database();
app.listen(config.port, () => console.log(`Listening at url: ${config.port}`));
