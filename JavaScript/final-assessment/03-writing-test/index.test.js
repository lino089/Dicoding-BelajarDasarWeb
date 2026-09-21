import { sum } from "./index.js";
import { test } from "node:test";
import assert from "node:assert";


test('fungsi sum', () => {
    const expectedValue = 3;
    const actualValue = sum(1,2);

    assert.equal(actualValue, expectedValue);
});
