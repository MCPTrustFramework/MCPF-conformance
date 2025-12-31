/**
 * Agent Card Validator
 */
const Ajv = require('ajv');
const schema = require('../schemas/agent-card.json');

const ajv = new Ajv();
const validate = ajv.compile(schema);

function validateAgentCard(card) {
  const valid = validate(card);
  return {
    valid,
    errors: valid ? null : validate.errors
  };
}

module.exports = { validateAgentCard };
