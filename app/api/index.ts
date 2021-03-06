import { Router as RouterExpress } from 'express';
import {fastify} from 'fastify';
import config from '../config';
import auth from './routes/auth';



// guaranteed to get dependencies
export default () => {
	const app = config.serverType === 'express' ? new RouterExpress() : fastify();
	auth(app);
	// user(app);
	// shop(app);
	return app
}