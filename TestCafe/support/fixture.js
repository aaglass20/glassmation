import { config } from "./config";
import url from "url";
import { mapValues, isFunction } from "lodash";
import { t } from "testcafe";


export const exampleFixture = (description, relativeUrl = "/") =>
  fixture(description).page(url.resolve(config.EXAMPLE_URL, relativeUrl));

export const SiteMap = {
  examplePage: "/testcafe/example/"
};

export const GoTo = mapValues(SiteMap, url => (args = {}) =>
  t.navigateTo(isFunction(url) ? url(args) : url)
);