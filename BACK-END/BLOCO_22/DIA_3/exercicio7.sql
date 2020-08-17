-- Escreva uma query SQL para alterar o nome da coluna state_province para state,
-- mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE hr.locations CHANGE STATE_PROVINCE STATE VARCHAR(25) NOT NULL;
