import express from "express";
import { home } from "../controllers/home.controllers.js";
import { redirectionHome } from '../controllers/redirect.controllers.js'
import { inscription } from '../controllers/inscription.js';
import { connexion } from '../controllers/connexion.js';


const homeRouter = express.Router();
homeRouter.get("/",redirectionHome)
homeRouter.get("/home", home);
homeRouter.get("/inscription",inscription)
homeRouter.get("/connexion",connexion)


export default homeRouter; // Exportez le routeur
