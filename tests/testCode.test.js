const lambda = require('../src/testCode');

describe('handler function', () => {
  it('should log the event and return the log stream name', async () => {
    const event = { foo: 'bar' };
    const context = { logStreamName: 'log-stream-123' };

    // Mock the console.log method to verify that it is called with the expected message
    console.log = jest.fn();

    const result = await lambda.handler(event, context);

    // Verify that the console.log method was called with the expected message
    expect(console.log).toHaveBeenCalledWith(`EVENT: \n${JSON.stringify(event, null, 2)}`);

    // Verify that the function returns the log stream name
    expect(result).toBe(context.logStreamName);
  });
});
