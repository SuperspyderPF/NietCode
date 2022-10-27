// Build a dictionary containing the frequency of each character appearing in s, Check if all values in the dictionary are the same.

function areOccurrencesEqual(s){
    s = [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})
    return new Set(Object.values(s)).size === 1;
}