const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PinIdService {

    constructor() { }

    async generate(body) {
        console.log(body, 'body in generate');
        const query = 'CALL sp_GeneratePinId (:country, :qtyRows, @res)';
        await models.query(query, {
            replacements: { country: body.country, qtyRows: body.qtyRows },
            type: models.QueryTypes.INSERT
        }).then((response) => {
            console.log(response, 'response---sp_GeneratePinId')
        })

    }

    async findByCountry(country) {
        console.log(country, 'Pais');
        const response = await models.PinIdProfile.findOne({
            where: { country }
        });
        
        if (!response) {
            throw boom.notFound('No hay registros para este pais');
        }

        return response;
    }
}


module.exports = PinIdService;