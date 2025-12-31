/**
 * A2A Delegation Conformance Tests
 */
const { describe, it, expect } = require('@jest/globals');
const axios = require('axios');

const baseURL = process.env.A2A_ENDPOINT || 'http://localhost:4003';
const client = axios.create({ baseURL, validateStatus: () => true });

describe('A2A Delegation Conformance', () => {
  it('should have /health endpoint', async () => {
    const { status, data } = await client.get('/health');
    expect(status).toBe(200);
    expect(data).toHaveProperty('status', 'ok');
  });

  it('should check delegation permission', async () => {
    const { status, data } = await client.get('/a2a/check', {
      params: {
        from: 'did:web:agent1.example',
        to: 'did:web:agent2.example'
      }
    });
    expect(status).toBe(200);
    expect(data).toHaveProperty('allowed');
  });

  it('should register delegation policy', async () => {
    const { status, data } = await client.post('/a2a/policies', {
      fromAgent: 'did:web:test1.example',
      toAgent: 'did:web:test2.example',
      allowedActions: ['test'],
      issuedBy: 'did:web:issuer.example'
    });
    expect(status).toBe(200);
    expect(data).toHaveProperty('policyId');
  });
});
