import read from '../reader';
import json from '../parser';

jest.setTimeout(5000);

test('testing response is exactly what it shall be', (done) => {
  read()
    .then((response) => json(response))
    .then((data) => {
      expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
      done();
    });
});
