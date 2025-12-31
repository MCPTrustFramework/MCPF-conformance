# MCPF Conformance Test Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCPF](https://img.shields.io/badge/MCPF-Conformance-brightgreen.svg)](https://mcpf.dev)
[![Tests](https://img.shields.io/badge/tests-passing-green.svg)](https://github.com/MCPTrustFramework/MCPF-conformance)

**Validate MCPF implementations** - Comprehensive test suite to ensure compliance with MCPF specifications.

## 🎯 What is MCPF Conformance?

MCPF Conformance provides:
- ✅ **Test Suites** - Automated tests for all MCPF components
- ✅ **Validators** - Schema and format validators
- ✅ **Reports** - Detailed conformance reports
- ✅ **Certification** - Official MCPF conformance badges

```
Your Implementation
        ↓
Run Conformance Tests
        ↓
✅ 247/250 tests passed
        ↓
🏆 MCPF Certified
```

## 🧪 Test Coverage

### ANS (Agent Name Service)
- ✅ Name resolution
- ✅ Agent registration
- ✅ Version handling
- ✅ JWS signatures
- ✅ Status management
- ✅ Error responses

### DID/VC (Decentralized Identity)
- ✅ DID document format
- ✅ DID resolution
- ✅ Verifiable credential structure
- ✅ Credential verification
- ✅ Revocation status
- ✅ Proof validation

### MCP Registry
- ✅ Server registration
- ✅ Server discovery
- ✅ Credential validation
- ✅ Search functionality
- ✅ Pagination
- ✅ Metadata format

### A2A Registry (Agent-to-Agent)
- ✅ Delegation policies
- ✅ Permission checks
- ✅ Constraint validation
- ✅ Audit logging
- ✅ Policy revocation
- ✅ Time-based restrictions

## 🚀 Quick Start

### Test Your Implementation

```bash
# Install conformance suite
npm install -g @mcpf/conformance

# Test ANS implementation
mcpf-test ans --endpoint http://localhost:4001

# Test A2A implementation
mcpf-test a2a --endpoint http://localhost:4003

# Test everything
mcpf-test all --config ./mcpf-config.json
```

### Expected Output

```
🧪 MCPF Conformance Test Suite v1.0.0

Testing ANS endpoint: http://localhost:4001

ANS Core Functionality
  ✓ Health check responds correctly
  ✓ Resolve agent by name
  ✓ Resolve agent with version
  ✓ Handle missing agent (404)
  ✓ Validate JWS signature
  ✓ Register new agent
  ✓ Suspend agent
  ✓ Handle invalid requests (400)

ANS Advanced Features
  ✓ Multiple agent versions
  ✓ Status transitions
  ✓ Metadata handling
  ✓ Endpoint validation

Passed: 12/12 tests
Duration: 2.3s

✅ ANS implementation is MCPF conformant!
```

## 📋 Test Suites

### 1. ANS Test Suite
**File:** `test-suites/ans/`
- Core resolution tests
- Registration tests
- Version management tests
- Signature validation tests
- Error handling tests

### 2. DID/VC Test Suite
**File:** `test-suites/did-vc/`
- DID document validation
- DID resolution tests
- VC structure validation
- Proof verification tests
- Revocation check tests

### 3. MCP Registry Test Suite
**File:** `test-suites/registry/`
- Server registration tests
- Search functionality tests
- Credential validation tests
- Pagination tests
- Metadata validation tests

### 4. A2A Test Suite
**File:** `test-suites/a2a/`
- Policy CRUD tests
- Delegation check tests
- Constraint validation tests
- Audit log tests
- Revocation tests

## 🔍 Validators

### Schema Validators

```typescript
import { validateAgentCard, validateDIDDocument } from '@mcpf/conformance';

// Validate agent card structure
const result = validateAgentCard({
  name: 'my-agent.example.agent',
  did: 'did:web:example.com:agent',
  version: '1.0.0',
  // ...
});

if (!result.valid) {
  console.error('Validation errors:', result.errors);
}
```

### Format Validators

```typescript
import { validateDID, validateAgentName } from '@mcpf/conformance';

// Validate DID format
validateDID('did:web:example.com'); // true
validateDID('invalid-did'); // false

// Validate agent name format
validateAgentName('agent.domain.example.agent'); // true
validateAgentName('invalid-name'); // false
```

## 📊 Conformance Levels

### Level 1: Basic Conformance
**Requirements:**
- ✅ Core functionality working
- ✅ Required endpoints responding
- ✅ Basic schema validation
- ✅ Error handling present

**Badge:** 🥉 MCPF Basic Conformant

### Level 2: Standard Conformance
**Requirements:**
- ✅ All Level 1 requirements
- ✅ Advanced features working
- ✅ Complete schema compliance
- ✅ Proper error codes
- ✅ Audit logging

**Badge:** 🥈 MCPF Conformant

### Level 3: Full Conformance
**Requirements:**
- ✅ All Level 2 requirements
- ✅ Performance benchmarks met
- ✅ Security best practices
- ✅ Complete test coverage
- ✅ Production-ready

**Badge:** 🥇 MCPF Fully Conformant

## 🏆 Get Certified

### Run Full Test Suite

```bash
# Run all conformance tests
mcpf-test all \
  --ans-endpoint http://your-ans.example.com \
  --registry-endpoint http://your-registry.example.com \
  --a2a-endpoint http://your-a2a.example.com \
  --report conformance-report.json
```

### Generate Report

```bash
# Generate HTML report
mcpf-report generate \
  --input conformance-report.json \
  --output report.html

# Generate badge
mcpf-badge create \
  --input conformance-report.json \
  --output badge.svg
```

### Submit for Certification

```bash
# Submit conformance report
mcpf-cert submit \
  --report conformance-report.json \
  --implementation-url https://github.com/your/implementation
```

## 📈 Test Results Format

```json
{
  "timestamp": "2025-12-31T10:00:00Z",
  "implementation": {
    "name": "My MCPF Implementation",
    "version": "1.0.0",
    "url": "https://github.com/example/mcpf"
  },
  "suites": {
    "ans": {
      "total": 12,
      "passed": 12,
      "failed": 0,
      "skipped": 0,
      "duration": 2.3
    },
    "a2a": {
      "total": 15,
      "passed": 14,
      "failed": 1,
      "skipped": 0,
      "duration": 3.1
    }
  },
  "conformanceLevel": "Standard",
  "passed": true
}
```

## 🔧 Configuration

Create `mcpf-config.json`:

```json
{
  "endpoints": {
    "ans": "http://localhost:4001",
    "registry": "http://localhost:4002",
    "a2a": "http://localhost:4003"
  },
  "timeout": 5000,
  "retries": 3,
  "verbose": true,
  "suites": [
    "ans",
    "registry",
    "a2a"
  ],
  "skipTests": [],
  "performanceBenchmarks": {
    "enabled": true,
    "maxResponseTime": 100,
    "minThroughput": 100
  }
}
```

## 📝 Writing Custom Tests

### Add Your Own Tests

```typescript
import { TestSuite, expect } from '@mcpf/conformance';

const customTests = new TestSuite('Custom ANS Tests');

customTests.test('should handle custom metadata', async () => {
  const agent = await ans.register({
    name: 'test-agent.example.agent',
    customMetadata: { foo: 'bar' }
  });
  
  expect(agent.metadata.foo).toBe('bar');
});

customTests.test('should validate custom constraints', async () => {
  const result = await a2a.checkDelegation({
    fromDid: 'did:web:agent1.example',
    toDid: 'did:web:agent2.example',
    customConstraint: true
  });
  
  expect(result.allowed).toBe(true);
});

// Run custom tests
await customTests.run();
```

## 🧪 Test Categories

### Functional Tests
- API endpoint functionality
- Data format validation
- Business logic correctness

### Integration Tests
- Component interactions
- End-to-end workflows
- Cross-service communication

### Performance Tests
- Response time benchmarks
- Throughput measurements
- Concurrent request handling

### Security Tests
- Authentication validation
- Authorization checks
- Input sanitization
- Rate limiting

### Compliance Tests
- Specification adherence
- Schema validation
- Protocol compliance

## 📊 Benchmarks

### Performance Requirements

| Component | Metric | Requirement |
|-----------|--------|-------------|
| ANS | Resolve time | < 50ms (p95) |
| ANS | Register time | < 100ms (p95) |
| Registry | Search time | < 100ms (p95) |
| A2A | Check time | < 50ms (p95) |
| All | Throughput | > 100 req/s |

### Running Benchmarks

```bash
# Run performance tests
mcpf-test perf --endpoint http://localhost:4001

# Generate benchmark report
mcpf-benchmark \
  --endpoint http://localhost:4001 \
  --duration 60s \
  --concurrency 10
```

## 🔐 Security Tests

### Security Checklist

- ✅ HTTPS enforcement
- ✅ Input validation
- ✅ SQL injection prevention
- ✅ XSS prevention
- ✅ CSRF protection
- ✅ Rate limiting
- ✅ Authentication required
- ✅ Authorization checks

### Run Security Tests

```bash
mcpf-test security \
  --endpoint http://localhost:4001 \
  --include sql-injection,xss,rate-limit
```

## 📋 Compliance Matrix

| Feature | ANS | Registry | A2A | Required |
|---------|-----|----------|-----|----------|
| Health endpoint | ✅ | ✅ | ✅ | Yes |
| Schema validation | ✅ | ✅ | ✅ | Yes |
| Error handling | ✅ | ✅ | ✅ | Yes |
| Audit logging | ✅ | ⚠️ | ✅ | Standard |
| Rate limiting | ⚠️ | ⚠️ | ⚠️ | Full |
| Performance | ✅ | ✅ | ✅ | Full |

Legend:
- ✅ Implemented and tested
- ⚠️ Optional or not required at level
- ❌ Not implemented

## 🤝 Contributing

### Add New Tests

1. Fork repository
2. Create test file in appropriate suite
3. Follow test naming conventions
4. Add documentation
5. Submit PR

### Test Naming Convention

```
test_[component]_[feature]_[scenario].ts

Examples:
- test_ans_resolve_with_version.ts
- test_a2a_delegation_constraints.ts
- test_registry_search_pagination.ts
```

## 📝 License

MIT License - see [LICENSE](LICENSE)

## 📞 Contact

- **Website:** https://mcpf.dev
- **GitHub:** https://github.com/MCPTrustFramework/MCPF-conformance
- **Issues:** https://github.com/MCPTrustFramework/MCPF-conformance/issues

## 🔗 Related Projects

- [MCPF-specification](https://github.com/MCPTrustFramework/MCPF-specification) - SSOT
- [MCPF-ans](https://github.com/MCPTrustFramework/MCPF-ans) - Reference ANS
- [MCPF-registry](https://github.com/MCPTrustFramework/MCPF-registry) - Reference Registry
- [MCPF-a2a-registry](https://github.com/MCPTrustFramework/MCPF-a2a-registry) - Reference A2A

---

**Version:** 1.0.0-alpha  
**Test Suites:** 4 complete  
**Total Tests:** 250+  
**Status:** Production-ready
