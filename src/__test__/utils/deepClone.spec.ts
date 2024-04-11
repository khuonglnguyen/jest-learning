import { deepClone } from "../../app/utils/deepClone";

describe('test suite file deepClone', () => {
    test('test not equal', () => {
        const object = {
            name: 'khuong',
            address: {
                name: 'can tho'
            }
        };

        expect(deepClone(object)).not.toBe(object);
    });

    test('test equal object', () => {
        const object = {
            name: 'khuong',
            address: {
                name: 'can tho'
            }
        };

        expect(deepClone(object)).toEqual(object);
    });

    test('test error when value is string', () => {
        try {
            deepClone('test' as any);
            
        } catch (error: any) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message');
            expect(error.message).toBe('Value must be a object type');
        }
    });

    // test('test error when value is number', () => {
    //     try {
    //         deepClone(1 as any);
            
    //     } catch (error: any) {
    //         expect(error).toBeInstanceOf(Error);
    //         expect(error).toHaveProperty('message');
    //         expect(error.message).toBe('Value must be a object type');
    //     }
    // });
})