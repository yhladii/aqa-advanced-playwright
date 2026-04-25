const { test, expect } = require('@playwright/test');

test.describe('API /cars', () => {

  test('Positive: should create a car successfully', async ({ request }) => {
    let response;
    let body;

    await test.step('Send request to create car', async () => {
      response = await request.post('/api/cars', {
        data: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 100,
        },
      });
    });

    await test.step('Verify response status is 201', async () => {
      expect(response.status()).toBe(201);
    });

    await test.step('Verify response body contains car id', async () => {
      body = await response.json();
      expect(body.data).toHaveProperty('id');
    });
  });

  test.describe('Negative scenarios', () => {

    test('should fail without mileage', async ({ request }) => {
      let response;

      await test.step('Send request without mileage', async () => {
        response = await request.post('/api/cars', {
          data: {
            carBrandId: 1,
            carModelId: 1,
          },
        });
      });

      await test.step('Verify status is 400', async () => {
        expect(response.status()).toBe(400);
      });
    });

    test('should fail when mileage > 999999', async ({ request }) => {
      let response;

      await test.step('Send request with too large mileage', async () => {
        response = await request.post('/api/cars', {
          data: {
            carBrandId: 1,
            carModelId: 1,
            mileage: 1000000,
          },
        });
      });

      await test.step('Verify status is 400', async () => {
        expect(response.status()).toBe(400);
      });
    });

    test('should fail with invalid data types', async ({ request }) => {
      let response;

      await test.step('Send request with invalid data types', async () => {
        response = await request.post('/api/cars', {
          data: {
            carBrandId: 'invalid',
            carModelId: 'invalid',
            mileage: -100,
          },
        });
      });

      await test.step('Verify status is 400', async () => {
        expect(response.status()).toBe(400);
      });
    });

    test('should fail with null values', async ({ request }) => {
      let response;

      await test.step('Send request with null values', async () => {
        response = await request.post('/api/cars', {
          data: {
            carBrandId: null,
            carModelId: null,
            mileage: null,
          },
        });
      });

      await test.step('Verify status is 400', async () => {
        expect(response.status()).toBe(400);
      });
    });

  });

});