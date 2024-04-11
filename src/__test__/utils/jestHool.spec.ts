describe('jest Hook', () => {
    beforeAll(() => {
        console.log('beforeAll');
    })

    beforeEach(() => {
        console.log('beforeEach');
    })

    test('test 1', () => {
        expect(1).toBe(1);
    })

    test.skip('test 2', () => {
        expect(2).toBe(2);
    })

    test.todo('test 3')

    afterEach(() => {
        console.log('afterEach');
    })

    afterAll(() => {
        console.log('afterAll');
    })
})