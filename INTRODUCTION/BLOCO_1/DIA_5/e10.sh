#!/bin/bash

dia=$(date +%F)
arquivos=`ls *.png`

for novo_nome in $arquivos
do
    mv $novo_nome ${dia}-${novo_nome}
done
