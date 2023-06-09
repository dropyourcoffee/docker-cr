#!/bin/bash

OUTPUT_YML=docker-compose.dev.yml


OPTIONS=("Non-persist" "Mount a local volume" "Sync AWS S3")
echo "Select an option for image persistency (1-3):"
select PERSIST_OPT in "${OPTIONS[@]}"; do
  if [ -n "$PERSIST_OPT" ]; then
    echo "Persistency Option : $PERSIST_OPT";
    break
  fi
  echo "Select an option for image persistency (1-3):"
done

echo ""

###

MANIDIR=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")
case $PERSIST_OPT in

  "${OPTIONS[0]}")
    mkdir -p $MANIDIR/registry/local
    cp .docker-compose.template.yml $OUTPUT_YML
    ;;

  "${OPTIONS[1]}")
    mkdir -p $MANIDIR/registry/local;
    awk -v n=$(($(awk '/volume/{ print NR; exit }' .docker-compose.template.yml)+1)) -v s="    - ./registry/local:/var/lib/registry" 'NR == n {print s} {print}' .docker-compose.template.yml > $OUTPUT_YML
    echo "Image blobs mount directory is : $MANIDIR/registry/local"
    ;;

esac


