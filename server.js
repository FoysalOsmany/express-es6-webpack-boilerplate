import config from './config';
import * as express from 'express';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as http from 'http';

const app = express();

// Secure app with helmet
app.use(helmet());

// GZIP all assets
app.use(compression());

// configure body parser
app.use(bodyParser.json({limit: '1mb'}));   // support JSON-encoded bodies
app.use(
    bodyParser.urlencoded(  // support URL-encoded bodies
        {
            extended: true
        }
    )
);

const port = config.port || process.env.PORT || 3000;


http.createServer(app).listen(port);