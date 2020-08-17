-- Verifique o impacto de um INDEX na tabela address
-- (banco de dados sakila) adicionando-o na coluna postal_code.
-- Após ter adicionado o índice, mensure o custo da query utilizando o execution plan,
-- como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query,
-- exclua o índice e mensure novamente esse custo.

CREATE INDEX postal_code_index ON sakila.address(postal_code);
DROP INDEX postal_code_index ON sakila.address;

SELECT * FROM sakila.address
WHERE postal_code = '36693';
-- Cost: 0.95
-- Cost: 65.40
