import {v2 as cloudinary} from 'cloudinary';
import { config  } from './config';

 
    cloudinary.config({ 
        cloud_name: config.cloudName , 
        api_key: config.apikeyCloud, 
        api_secret: config.apisecretCloud // Click 'View API Keys' above to copy your API secret
    });


    export default cloudinary;