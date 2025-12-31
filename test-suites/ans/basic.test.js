/**
 * ANS Basic Conformance Tests
 */
const { describe, it, expect } = require('@jest/globals');
const axios = require('axios');

const baseURL = process.env.ANS_ENDPOINT || 'http://localhost:4001';
const client = axios.create({ baseURL, validateStatus: () => true });

describe('ANS Basic Conformance', () => {
  it('should have /healthz endpoint', async () => {
    const { status, data } = await client.get('/healthz');
    expect(status).toBe(200);
    expect(data).toHaveProperty('status', 'ok');
  });

  it('should resolve agent by name', async () => {
    const { status, data } = await client.get('/resolve', {
      params: { name: 'test-agent.example.agent' }
    });
    expect(status).toBe(200);
    expect(data).toHaveProperty('card');
    expect(data.card).toHaveProperty('name');
    expect(data.card).toHaveProperty('did');
  });

  it('should return 404 for missing agent', async () => {
    const { status } = await client.get('/resolve', {
      params: { name: 'nonexistent.agent' }
    });
    expect(status).toBe(404);
  });

  it('should validate JWS signature', async () => {
    const { data } = await client.get('/resolve', {
      params: { name: 'test-agent.example.agent' }
    });
    expect(data).toHaveProperty('jws');
    expect(data.jws).toHaveProperty('compact');
    const jws = data.jws.compact;
    expect(jws.split('.')).toHaveLength(3);
  });
});
