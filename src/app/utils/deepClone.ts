export function deepClone<T extends object>(object: T): T {
    if (typeof object !== 'object' || typeof object === 'number' ) {
        throw Error('Value must be a object type');
    }
    
    return JSON.parse(JSON.stringify(object));
}
