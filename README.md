# 🚀 API Service Examples

This project demonstrates a simple and reusable approach to creating a generic API service in TypeScript. The service is built using `axios` for HTTP requests and provides a clean way to interact with APIs. Below is an explanation of the key files and how to use them.

---

## 📂 File Structure

1. **`api.ts`**  
    📌 This file contains the configuration for the `axios` instance, including base URL, headers, and interceptors for request and response handling.

2. **`api.service.ts`**  
    📌 This file defines a generic service function `apiService` that wraps the `axios` instance. It simplifies making API calls by abstracting the HTTP method, URL, request body, and additional options.

3. **`test.service.ts`**  
    📌 This file demonstrates how to use the `apiService` function to create specific API service methods for a `Test` resource.

---

## 🛠️ How to Use

### 1. ⚙️ Configure the API (`api.ts`)

The `api.ts` file sets up an `axios` instance with the following features:
- **Base URL**: Configured using environment variables (`API_URL` and `API_PORT`).
- **Authorization**: 🔑 Automatically attaches a `Bearer` token from `localStorage` to requests.
- **Error Handling**: 🚨 Intercepts responses to handle errors consistently.

### 2. 🧰 Use the Generic Service (`api.service.ts`)

The `apiService` function is a generic wrapper for making API calls. It accepts the following parameters:
- `url`: 🌐 The endpoint to call.
- `method`: 📬 The HTTP method (`GET`, `POST`, `PUT`, `DELETE`).
- `body`: 📝 The request payload (optional).
- `options`: ⚙️ Additional `AxiosRequestConfig` options (optional).

Example usage:
```typescript
import { apiService } from './api/api.service';

// Example: Fetch all items
const items = await apiService('/items', 'GET');

// Example: Create a new item
const newItem = await apiService('/items', 'POST', { name: 'New Item' });
```

### 3. 🛠️ Create Specific Services (`test.service.ts`)

The `test.service.ts` file demonstrates how to use `apiService` to create methods for a specific resource (`Test`). These methods include:
- `getAllTest`: 📋 Fetch all test records.
- `getTestById`: 🔍 Fetch a test record by ID.
- `createTest`: ✏️ Create a new test record.
- `updateTest`: 🛠️ Update an existing test record.
- `deleteTest`: 🗑️ Delete a test record.
- `getBlobFile`: 📂 Fetch a file as a URL (string)

Example usage:
```typescript
import { TestService } from './service/test.service';

const testService = new TestService();

// Fetch all tests
const tests = await testService.getAllTest();

// Fetch a test by ID
const test = await testService.getTestById('123');

// Create a new test
const newTest = await testService.createTest({ name: 'Sample Test' });

// Update a test
const updatedTest = await testService.updateTest('123', { name: 'Updated Test' });

// Delete a test
await testService.deleteTest('123');

// Fetch a file as a URL string from the blob file
const fileURL = await testService.getBlobFile('123');
```

---

## 🌍 Environment Variables

Ensure the following environment variables are set in your `.env` file:
- `API_URL`: 🌐 The base URL of the API.
- `API_PORT`: 🔌 The port of the API.

---

## 📦 Dependencies

- `axios`: 📡 For making HTTP requests.
- `dotenv`: 🛠️ For managing environment variables (optional, if used).

---

## 🏁 Conclusion

This project provides a reusable and scalable way to interact with APIs using TypeScript. The generic `apiService` function and the example `TestService` demonstrate how to build clean and maintainable service layers for your applications.  