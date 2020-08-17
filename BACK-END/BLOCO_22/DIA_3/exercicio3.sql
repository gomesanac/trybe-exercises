-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila.
-- Sua view deve exibir o address_id, o address, o district, o city_id e a city.
-- Os resultados devem ser ordenados pelo nome das cidades.

CREATE VIEW address_info AS
SELECT address.address_id, address.address, address.district, city.city_id, city.city
FROM sakila.address AS address
INNER JOIN sakila.city AS city ON city.city_id = address.city_id
ORDER BY 5;

SELECT * FROM address_info;
