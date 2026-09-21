import sum from "./index.js";
import assert from "node:assert";
import test from "node:test";

test('2 angka positif', () => {
    assert.strictEqual(sum(2, 3), 5);
});

test('harus mengembalikan 0 jika parameter pertama bukan angka', () => {
    assert.strictEqual(sum('2', 3), 0);
});

test('harus mengembalikan 0 jika parameter kedua bukan angka', () => {
    assert.strictEqual(sum(2, '3'), 0);
});

test('harus mengembalikan 0 jika kedua parameter bukan angka', () => {
    assert.strictEqual(sum('2', '3'), 0);
});

test('Harus mengembalikan 0 jika paremeter pertama bernilai negative', () => {
    assert.strictEqual(sum(-2, 3), 0)
});

test('Harus mengembalikan 0 jika paremeter kedua bernilai negative', () => {
    assert.strictEqual(sum(2, -3), 0)
});


test('harus mengembalikan 0 jika kedua parameter negative', () => {
    assert.strictEqual(sum(-2, -3), 0);
});

test('harus mengembalikan 0 jika argumen tidak ada', () => {
    assert.strictEqual((5), 0);
});
