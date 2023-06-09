import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();

const mascotas = []

router.get('/', (req, res) => {
    res.send({mascotas});
});

router.post('/', uploader.single('thumbnail'),(req, res) => {
    const file = req.file
    console.log(file);
    const mascota = req.body
    mascotas.push(mascota);
    res.send({status: 'success'});
});

export default router;