#!/bin/bash

arquivo=$1
contagem=`ls -l $arquivo | wc -l`

if [ -d "$arquivo" ]
    then
        echo "O $arquivo tem $contagem arquivos."
else
    echo "O argumento $arquivo não é um diretório!"
fi
