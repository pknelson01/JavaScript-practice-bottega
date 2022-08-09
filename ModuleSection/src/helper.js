export const greeting = 'Hello there';

export function mult(x, y) {
    return x * y;
}

export function add(x, y, z) {
    return x + y + z
}

export function posOrNeg(x) {
    if (x > 0) {
        return 'Positive'
    }
    if (x < 0) {
        return 'Negative'
    }
    if (x === 0) {
        return 'Zero'
    }
}