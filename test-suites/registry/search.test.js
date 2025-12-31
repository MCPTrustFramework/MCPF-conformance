/**
 * MCP Registry Conformance Tests
 */
const { describe, it, expect } = require('@jest/globals');
const axios = require('axios');

const baseURL = process.env.REGISTRY_ENDPOINT || 'http://localhost:4002';
const client = axios.create({ baseURL, validateStatus: () => true });

describe('Registry Search Conformance', () => {
  it('should list servers', async () => {
    const { status, data } = await client.get('/mcp/servers');
    expect(status).toBe(200);
    expect(data).toHaveProperty('items');
    expect(Array.isArray(data.items)).toBe(true);
  });

  it('should search by capability', async () => {
    const { status, data } = await client.get('/mcp/search', {
      params: { capability: 'test' }
    });
    expect(status).toBe(200);
    expect(data).toHaveProperty('items');
  });
});
