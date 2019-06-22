#!/usr/bin/env bash
export EXAMPLE_URL=https://devexpress.github.io

testcafe --test-meta Critical=1 \
	chrome \
	../feature/example.js \
	--skip-js-errors