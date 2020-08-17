#!/bin/bash

filepath=/home/ana/Documentos/B1_D5/e4.sh 

if [ -e $filepath ]
    then
        echo "O caminho $filepath está habilitado!"
        if [ -w $filepath ]
            then
                echo "Você tem permissão para editar $filepath"
        else
            echo "Você tNÃO foi autorizado a editar $filepath"
        fi
else
    echo "O caminho $filepath NÃO está habilitado!"
fi