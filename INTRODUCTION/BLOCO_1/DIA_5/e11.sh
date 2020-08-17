#!/bin/bash

diretorio=$1
extensao=$2

dia=$(date +%F)

cd diretorio

arquivos=`ls *.$extensao`

for novo_nome in $arquivos
do
    echo "Renomenando $novo_nome para ${dia}-${novo_nome}"
    mv $novo_nome ${dia}-${novo_nome}
done