import * as config from './config';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import http from 'http';

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

app.get('/healthCheck', function(req, res) {
    res.send(`Server is up for ${process.uptime()}s`);
});

export const port = config.port || process.env.PORT || 3000;


export const server = http.createServer(app);