#!/bin/bash





export BUNDLE_PATH=~/.gems

# Run this script to test the website locally

#********

# This is my rough WSL setup, which took HOURS to figure out:
#
#     sudo apt-get install -y ruby-full build-essential zlib1g-dev
#     brew remove ruby  # should've not brew installed in the 1st place :shrug:
#     sudo /usr/bin/gem install bundler jekyll
#     bundle install
#
# I'm not sure why the full path "/usr/bin/gem" was required, maybe my PATH was
# screwed up after installing gem/ruby/bundle in 2-3 different places with using
# various package managers (apt, brew, update_rubygems?)

#********

## One-time setup:
##sudo bundle install
#bundle install

#********

#sudo bundle exec jekyll serve
bundle exec jekyll serve

#********

## To clean, you can do:
##
##     sudo bundle exec jekyll clean

#********

