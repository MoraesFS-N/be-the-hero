const connection = require('../database/connection');
const { response } = require('express');

module.exports = {
    async create(req, res){
        const { id } = req.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }

        return res.json(ong);
    }  
}