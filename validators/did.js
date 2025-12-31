/**
 * DID Format Validator
 */
function validateDID(did) {
  const didPattern = /^did:[\w]+:[\w.:%-]+$/;
  return didPattern.test(did);
}

function validateAgentName(name) {
  const namePattern = /^[\w-]+(\.[\w-]+)*\.agent$/;
  return namePattern.test(name);
}

module.exports = { validateDID, validateAgentName };
