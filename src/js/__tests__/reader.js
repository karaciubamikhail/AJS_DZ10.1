import read from '../reader';

jest.setTimeout(5000);

test('testing instance of response', (done) => {
  read().then((data) => {
    expect(data).toBeInstanceOf(ArrayBuffer);
    done();
  });
});
