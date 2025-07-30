# Documentation Generation Examples

This guide shows how the FORGE Documentor Agent can automatically generate documentation from various sources.

## From Code Comments

### JavaScript/TypeScript Example

```javascript
/**
 * FORGE: Document this
 * Authenticates a user with OAuth providers
 * Supports Google, GitHub, and Microsoft authentication
 * @param {string} provider - OAuth provider name
 * @param {object} credentials - Provider-specific credentials
 * @returns {Promise<User>} Authenticated user object
 * @throws {AuthError} When authentication fails
 */
async function authenticateOAuth(provider, credentials) {
  // Implementation...
}
```

**Generated Documentation:**

```markdown
## authenticateOAuth

Authenticates a user with OAuth providers. Supports Google, GitHub, and Microsoft authentication.

### Parameters

| Name | Type | Description |
|------|------|-------------|
| provider | string | OAuth provider name |
| credentials | object | Provider-specific credentials |

### Returns

`Promise<User>` - Authenticated user object

### Throws

`AuthError` - When authentication fails

### Example

\```javascript
const user = await authenticateOAuth('google', {
  token: 'oauth-token-here'
});
\```
```

### Python Example

```python
def process_payment(amount: float, currency: str = "USD") -> PaymentResult:
    """
    FORGE: Document this
    Process a payment transaction
    
    Handles payment processing with retry logic and fraud detection.
    Supports multiple currencies and payment methods.
    
    Args:
        amount: Payment amount in specified currency
        currency: ISO 4217 currency code (default: USD)
        
    Returns:
        PaymentResult object with transaction details
        
    Raises:
        PaymentError: When payment processing fails
        InsufficientFunds: When account balance is too low
    """
    # Implementation...
```

## From Completed Cycles

When you complete a FORGE cycle, the Documentor can extract key information to create documentation:

### Input: Completed Cycle

```markdown
# Feature: User Authentication

### Phase 5: Evaluate 📊 [Complete]

### Key Learnings
- JWT tokens with 24h expiry work well
- OAuth integration simplified user onboarding
- Email verification reduced spam accounts by 90%

### Architecture Decisions
- Chose JWT over sessions for stateless auth
- Implemented refresh token rotation
- Added rate limiting to prevent brute force
```

### Generated: Architecture Decision Record

```markdown
# ADR-001: JWT-Based Authentication

**Status**: Implemented  
**Date**: 2024-01-15  
**Context**: User Authentication System

## Decision

We will use JWT tokens with 24-hour expiry for authentication instead of server-side sessions.

## Rationale

- **Stateless**: No server-side session storage required
- **Scalable**: Works across multiple servers without sticky sessions
- **Mobile-friendly**: Tokens can be stored securely on devices

## Implementation

- Access tokens expire in 24 hours
- Refresh tokens rotate on each use
- Rate limiting prevents brute force attacks

## Consequences

- ✅ Simplified horizontal scaling
- ✅ Better mobile app support
- ⚠️ Token revocation requires blocklist
- ⚠️ Larger request headers

## Lessons Learned

Email verification reduced spam accounts by 90%, validating our security approach.
```

## From Configuration Analysis

The Documentor can analyze your project configuration to generate setup guides:

### Input: package.json

```json
{
  "name": "forge-app",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest",
    "lint": "eslint src/"
  },
  "dependencies": {
    "react": "^18.0.0",
    "vite": "^4.0.0"
  }
}
```

### Generated: Development Setup Guide

```markdown
# Development Setup

## Prerequisites

- Node.js 16+ 
- npm or yarn

## Installation

\```bash
# Clone the repository
git clone <repo-url>
cd forge-app

# Install dependencies
npm install
\```

## Available Commands

### Development
\```bash
npm run dev
\```
Starts the Vite development server with hot module replacement.

### Building
\```bash
npm run build
\```
Creates production build in `dist/` directory.

### Testing
\```bash
npm run test
\```
Runs test suite using Vitest.

### Linting
\```bash
npm run lint
\```
Checks code quality with ESLint.
```

## From API Routes

### Input: Express Routes

```javascript
// FORGE: Generate API docs
router.get('/users', authenticate, getUsers);
router.get('/users/:id', authenticate, getUser);
router.post('/users', authenticate, authorize('admin'), createUser);
router.put('/users/:id', authenticate, authorize('admin'), updateUser);
router.delete('/users/:id', authenticate, authorize('admin'), deleteUser);
```

### Generated: API Documentation

```markdown
# Users API

## Authentication

All endpoints require authentication via Bearer token:

\```http
Authorization: Bearer <token>
\```

## Endpoints

### List Users
\```http
GET /users
\```

Returns paginated list of users.

**Response:**
\```json
{
  "users": [...],
  "total": 100,
  "page": 1
}
\```

### Get User
\```http
GET /users/:id
\```

Returns specific user by ID.

### Create User
\```http
POST /users
\```

**Required Role**: admin

**Request Body:**
\```json
{
  "name": "string",
  "email": "string",
  "role": "string"
}
\```

### Update User
\```http
PUT /users/:id
\```

**Required Role**: admin

### Delete User
\```http
DELETE /users/:id
\```

**Required Role**: admin
```

## Interactive Documentation Generation

```bash
$ forge document

📚 Starting documentation session...

🤖 Claude: I'll help with documentation. What would you like to do?

You: Generate docs from my API routes

🤖 Claude: Scanning for API route definitions...

Found 23 API endpoints across 5 route files:
- auth.routes.js: 5 endpoints
- user.routes.js: 6 endpoints
- product.routes.js: 7 endpoints
- order.routes.js: 4 endpoints
- admin.routes.js: 1 endpoint

I'll generate comprehensive API documentation.

✅ Created: docs/api/auth.md
✅ Created: docs/api/users.md
✅ Created: docs/api/products.md
✅ Created: docs/api/orders.md
✅ Created: docs/api/admin.md
✅ Created: docs/api/README.md (index)

The documentation includes:
- Endpoint descriptions
- Request/response examples
- Authentication requirements
- Error responses
- Rate limiting info

Would you like me to:
1. Generate Postman collection
2. Create API client examples
3. Add webhook documentation
4. Return to main menu
```

## Best Practices for Documentation Generation

1. **Use Marker Comments**
   ```javascript
   // FORGE: Document this
   // FORGE: Generate API docs
   // FORGE: Extract architecture
   ```

2. **Provide Context**
   - Include descriptive function/class names
   - Add JSDoc or docstring comments
   - Use meaningful parameter names

3. **Keep Cycles Updated**
   - Document decisions as you make them
   - Update learnings after each phase
   - Include architecture rationale

4. **Review Generated Docs**
   - AI-generated docs are a starting point
   - Review for accuracy and completeness
   - Add project-specific examples

5. **Maintain Consistency**
   - Use templates for similar documents
   - Follow naming conventions
   - Keep cross-references updated