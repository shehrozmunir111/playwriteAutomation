import { test, expect } from '@playwright/test';

var userId;

test('Get Users', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
});

test('Create User', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "shehroz", 
            "job": "trainer"
        },
        headers:{
            "Accept":"application/json"
        }
    });

    const jsonResponse = await response.json(); // Await the JSON response
    console.log(jsonResponse); // Log full response to check structure

    expect(response.status()).toBe(201);

    userId = jsonResponse.id; // Extract id properly
    console.log("User Creation ID:", userId);
});


test('Update User', async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/' + userId, {
        data: {
            "name": "shehroz", 
            "job": "engineer"
        },
        headers:{
            "Accept":"application/json"
        }
    });

    const jsonResponse = await response.json(); // Await the JSON response
    console.log(jsonResponse); // Log full response to check structure
    expect(response.status()).toBe(200);
});

test('Delete User', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/' + userId);
    console.log("Delete User Response Status:", response.status());
    expect(response.status()).toBe(204);
});