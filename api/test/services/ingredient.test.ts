import app from '../../src/app';

describe('\'ingredient\' service', () => {
  it('registered the service', () => {
    const service = app.service('ingredient');
    expect(service).toBeTruthy();
  });
});
