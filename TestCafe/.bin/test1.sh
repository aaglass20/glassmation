#!/usr/bin/env bash
export EXAMPLE_URL=https://devexpress.github.io

testcafe \
	chrome \
	../feature/test1.js \
	--skip-js-errors