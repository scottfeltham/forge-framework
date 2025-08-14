# API Documentation: {{API_NAME}}

**Version**: {{API_VERSION}}  
**Base URL**: {{BASE_URL}}  
**Updated**: {{DATE}}

## Overview

{{API_DESCRIPTION}}

## Authentication

{{AUTH_METHOD_DESCRIPTION}}

### Example
```http
{{AUTH_EXAMPLE}}
```

## Endpoints

### {{ENDPOINT_GROUP_1}}

#### {{METHOD}} {{ENDPOINT_PATH}}

{{ENDPOINT_DESCRIPTION}}

**Parameters**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| {{PARAM_NAME}} | {{TYPE}} | {{REQUIRED}} | {{DESCRIPTION}} |

**Request Body**
```json
{{REQUEST_BODY_EXAMPLE}}
```

**Response**
```json
{{RESPONSE_EXAMPLE}}
```

**Status Codes**

| Code | Description |
|------|-------------|
| 200 | {{SUCCESS_DESCRIPTION}} |
| 400 | {{BAD_REQUEST_DESCRIPTION}} |
| 401 | {{UNAUTHORIZED_DESCRIPTION}} |
| 404 | {{NOT_FOUND_DESCRIPTION}} |
| 500 | {{SERVER_ERROR_DESCRIPTION}} |

### {{ENDPOINT_GROUP_2}}

#### {{METHOD}} {{ENDPOINT_PATH}}

{{ENDPOINT_DESCRIPTION}}

## Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "{{ERROR_CODE}}",
    "message": "{{ERROR_MESSAGE}}",
    "details": {{OPTIONAL_DETAILS}}
  }
}
```

### Common Error Codes
| Code | Description |
|------|-------------|
| {{ERROR_CODE}} | {{ERROR_DESCRIPTION}} |

## Rate Limiting

{{RATE_LIMIT_DESCRIPTION}}

### Headers
```http
X-RateLimit-Limit: {{LIMIT}}
X-RateLimit-Remaining: {{REMAINING}}
X-RateLimit-Reset: {{RESET_TIME}}
```

## Webhooks

{{WEBHOOK_DESCRIPTION}}

### Webhook Payload
```json
{{WEBHOOK_PAYLOAD_EXAMPLE}}
```

## SDK/Client Libraries

- **JavaScript**: {{JS_LIBRARY_LINK}}
- **Python**: {{PYTHON_LIBRARY_LINK}}
- **Ruby**: {{RUBY_LIBRARY_LINK}}

## Changelog

### {{VERSION}} - {{DATE}}
- {{CHANGE_1}}
- {{CHANGE_2}}

## Support

{{SUPPORT_INFORMATION}}