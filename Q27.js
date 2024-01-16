//Compact Object

var compactObject = function(obj) {
    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;
    const compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (Boolean(value)) compacted[key] = value;
    }
    return compacted;
};

// Test Case
const inputObject = {
    a: 1,
    b: null,
    c: {
        d: 2,
        e: {
            f: 3,
            g: null
        }
    },
    h: [4, null, { i: 5, j: undefined }, [null, 6]]
};

const result = compactObject(inputObject);

console.log(result);

