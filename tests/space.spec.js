const request = require('supertest');
const users = require('../src/components/UsersList/Users');
const albums = require('../src/components/UserAlbums/UserAlbums');
const photos = require('../src/components/Photo/RenderPhoto');

describe('users end point test suite', () => {
    it('tests /users endpoints', async() => {
        const response = await request(users).get("https://jsonplaceholder.typicode.com/users");
        expect(response.body).toHaveLength(10);
        expect(response.statusCode).toBe(200);

    });
});

describe('albums end point test suite', () => {
  it('tests /albums?userId="userid" endpoints', async() => {
      const response = await request(albums).get("https://jsonplaceholder.typicode.com/albums?userId=5");
      expect(response.body).toHaveLength(10);
      expect(response.statusCode).toBe(200);
      // Checking that the albums array contains any Object
      expect(response.body.starship).toEqual(expect.arrayContaining(
        [expect.any(Object)]));
  });
});

describe('photos end point test suite', () => {
  it('tests /photos?albumId="userid" endpoints', async() => {
      const response = await request(albums).get("https://jsonplaceholder.typicode.com/photos?albumId=1");
      expect(response.body).toHaveLength(50);
      expect(response.statusCode).toBe(200);
      // Checking that the albums array contains any Object
      expect(response.body.starship).toEqual(expect.arrayContaining(
        [expect.any(Object)]));
  });
});