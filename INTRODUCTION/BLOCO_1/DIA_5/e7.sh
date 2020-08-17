#!/bin/bash

arquivo=$1

if [ -f "$arquivo" ]
    then
        echo "$arquivo é um arquivo comum"
        ls -l $arquivo
elif [ -d "$arquivo" ]
    then
        echo "$arquivo é um diretório"
        ls -l $arquivo
else
    echo "$arquivo é um outro tipo de arquivo"
    ls -l $arquivo
fi
