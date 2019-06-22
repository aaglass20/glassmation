import {Selector, t} from "testcafe";
import examplePage from "../pages/examplePage"

const example = new examplePage();

fixture`Example #4`
    .page`https://devexpress.github.io/testcafe/example/`


test("Not Testing Metadata", async t => {
    await t
        .typeText(example.youName, "Failed")
        .debug()
});

test.meta('Critical', '1')("Testing Metadata", async t => {
    await t
        .typeText(example.youName, "Nailed it")
        .debug()
});

test("Still not testing Metadata", async t => {
    await t
        .typeText(example.youName, "Failed")
        .debug()
});


