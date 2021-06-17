let expect = require('expect');

var {generateMessage, GenerateLocationMessage} = require(' ./message');

describe('Generate Message', () => {
    it("should generate correct message object", () => {
        let from = "WJD",
        text = "Some random text"
        message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('Generate location', () => {
    it('should generate correctlocation object', () => {
        let from = 'Claire',
            lat = 15,
            lng = 56,
            url = `https://www.google.com/maps?q=${lat},${lng}`,
            message = GenerateLocationMessage(from, lat, lng);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    })
})