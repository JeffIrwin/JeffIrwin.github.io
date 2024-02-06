#!/bin/bash

export BUNDLE_PATH=~/.gems

# Run this script to test the website locally

## One-time setup:
##sudo bundle install
#bundle install

sudo bundle exec jekyll serve
#bundle exec jekyll serve

## To clean, you can do:
##
##     sudo bundle exec jekyll clean

