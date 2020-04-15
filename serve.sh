#!/bin/bash
bundle exec jekyll serve 2>&1 | grep -E -v 'deprecated|GitHub Metadata'