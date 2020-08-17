-- Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies,
-- deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização.
-- Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing'.
-- Caso contrário, insira o valor 'Decreasing'. Adicionalmente, insira um novo registro na tabela movies_logs,
-- contendo informações sobre o registro alterado (movie_id, action e log_date).


