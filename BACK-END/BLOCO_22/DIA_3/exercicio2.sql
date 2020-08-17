-- Crie uma view chamada film_info utilizando as tabelas actor, film_actor e film do banco de dados sakila.
-- Sua view deve exibir o actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o
-- título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.

CREATE VIEW film_info AS
SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS `actor`, film.title
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film_actor ON film_actor.actor_id = actor.actor_id
INNER JOIN sakila.film AS film ON film_actor.film_id = film_actor.film_id
ORDER BY 2;

SELECT * FROM film_info;
