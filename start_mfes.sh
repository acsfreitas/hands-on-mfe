#!/bin/bash

PROJECTS=("composer" "body" "header" "contact")

for PROJECT in "${PROJECTS[@]}"
do
  echo "Start project $PROJECT..."
  (cd $PROJECT && yarn start) &
done

wait
