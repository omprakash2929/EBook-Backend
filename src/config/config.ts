import {config as conf} from 'dotenv';

conf();

const _config ={
    port: process.env.PORT,
    database: process.env.MONGO_CONNECTION_STRING,
    env: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
    cloudName: process.env.cloud_name,
    apikeyCloud: process.env.api_key_cloudinary,
    apisecretCloud: process.env.api_secret_cloudinary

}


export const config = Object.freeze(_config);