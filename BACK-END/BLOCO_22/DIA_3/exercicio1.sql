-- Crie uma view chamada film_with_categories utilizando as tabelas category, film_category e
-- film do banco de dados sakila. Essa view deve exibir o título do filme, o id da categoria e
-- o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

CREATE VIEW film_with_categories AS
SELECT film.title, film_cat.category_id, cat.name FROM sakila.film AS film
INNER JOIN sakila.film_category AS film_cat ON film_cat.film_id = film.film_id
INNER JOIN sakila.category AS cat ON cat.category_id = film_cat.category_id
ORDER BY 1;

SELECT * FROM film_with_categories;
