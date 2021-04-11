const Joi = require('joi');

const comics_validation_schema = Joi.object({
    titre: Joi.string().max(50).min(5).required(),
    auteur: Joi.string().max(30).required(),
    url: Joi.string().required()
})

const comics_validation_schema_update = Joi.object({
    titre: Joi.string().max(50).min(5).required(),
    auteur: Joi.string().max(30).required(),
    url: Joi.string().required()
})

function comic_valid(body) {
    return comics_validation_schema.validate(body);
}

function comic_valid_update(body) {
    return comics_validation_schema.validate(body);
}

const Comic = mongoose.model('Comic', comic_shcema);

module.exports.Comic = Comic
module.exports.comic_valid = comic_valid
module.exports.comic_valid_update = comic_valid_update