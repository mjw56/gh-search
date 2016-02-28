#!/usr/bin/env bash

set -ev

rm -rf dist/
rm -rf dist-module/
mkdir dist/
mkdir dist-module/

babel src \
  --out-dir dist/src