-- Para realizar os exercícios, execute este script:

CREATE DATABASE IF NOT EXISTS BeeMovies;

USE BeeMovies;

CREATE TABLE movies(
    movie_id INT PRIMARY KEY auto_increment,
    ticket_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ticket_price_estimation VARCHAR(15),
    release_year YEAR
) engine = InnoDB;

CREATE TABLE movies_logs(
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    action VARCHAR(15) NOT NULL,
    log_date DATE NOT NULL
) engine = InnoDB;

-- Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos,
-- deve enviar uma informação para a tabela movies_logs, onde devem ser guardados a data da exclusão,
-- a action 'DELETE' e o id do filme excluído.


