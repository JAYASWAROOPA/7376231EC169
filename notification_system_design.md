# Notification System Design - Afford Medical Technologies

## 1. Architectural Strategy
This system implements a **Shared Telemetry Pattern**. By creating a reusable `logging_middleware` package, we ensure that both the Frontend (React) and Backend (Node.js) use the exact same data schema for event reporting.

## 2. The "Narrative" Approach
Unlike standard error catching, this implementation captures:
- **Successful Operations**: (e.g., Server listening, Frontend mount)
- **Validation Failures**: (e.g., Data type mismatches)
- **Fatal System Failures**: (e.g., Database connection timeouts)

## 3. Data Schema
Every log entry sent to the test server contains:
| Field | Purpose |
| :--- | :--- |
| `stack` | Distinguishes between Browser (FE) and Server (BE) issues. |
| `level` | Categorizes severity (Fatal, Error, Warn, Info, Debug). |
| `package` | Pinpoints the exact module or component failing. |
| `message` | A descriptive, context-rich "narrative" of the event. |

## 4. Resilience Features
- **Timeout Protection**: The middleware uses an `AbortController` to ensure that a slow logging server does not hang the main application.
- **Local Fallback**: If the `fetch` call fails (as seen during network timeouts), the narrative is still preserved in the local console.