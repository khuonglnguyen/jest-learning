import { toNonAccentVietnamese } from "../../app/utils/vietnameseNonAccent"

describe('test suite file vietnameseNonAccent', () => {
    test('english only', () => {
        expect(toNonAccentVietnamese('hello')).toBe('hello');
    })

    test('vietnamese only', () => {
        expect(toNonAccentVietnamese('xin chào')).toBe('xin chao');
    })

    test('has vietnamese', () => {
        expect(toNonAccentVietnamese('xin chào Peter')).toBe('xin chao Peter');
    })
})