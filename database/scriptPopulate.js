//Formato json 

//Cadastro usuarios   
[
    {
      "nome_usuario": "João",
      "sobrenome": "Silva",
      "email_cadastro": "joao.silva@gmail.com",
      "cpf": "01256685202",
      "senha_cadastro": "12345678",
      "telefone": "11123456781",
      "id_endereco_fk": 1
    },
    {
      "nome_usuario": "Maria",
      "sobrenome": "Santos",
      "email_cadastro": "maria.santos@hotmail.com",
      "cpf": "12663358995",
      "senha_cadastro": "12568749",
      "telefone": "21987654321",
      "id_endereco_fk": 2
    },
    {
      "nome_usuario": "Pedro",
      "sobrenome": "Oliveira",
      "email_cadastro": "pedro.oliveira@yahoo.com.br",
      "cpf": "45669985636",
      "senha_cadastro": "31456786",
      "telefone": "8189012345",
      "id_endereco_fk": 3
    },
    {
      "nome_usuario": "Ana",
      "sobrenome": "Pereira",
      "email_cadastro": "ana.sousa@yahoo.com.br",
      "cpf": "36931176080",
      "senha_cadastro": "23456789",
      "telefone": "6123456789",
      "id_endereco_fk": 4
    },
    {
      "nome_usuario": "Renata",
      "sobrenome": "Ferreira",
      "email_cadastro": "renata.ferreira@yahoo.com.br",
      "cpf": "23309887022",
      "senha_cadastro": "12345678",
      "telefone": "2789012345",
      "id_endereco_fk": 5
    }
  ]

  //endereco

  [
    {
      "logradouro": "Rua Principal",
      "numero": "42",
      "complemento": "Apto 101",
      "cidade": "São Paulo",
      "uf": "SP",
      "cep": "01234567"
    },
    {
      "logradouro": "Avenida Secundária",
      "numero": "18",
      "complemento": "Casa",
      "cidade": "Rio de Janeiro",
      "uf": "RJ",
      "cep": "20000123"
    },
    {
      "logradouro": "Estrada Distante",
      "numero": "7",
      "complemento": "Sala 3B",
      "cidade": "Belo Horizonte",
      "uf": "MG",
      "cep": "30005678"
    },
    {
      "logradouro": "Rua A",
      "numero": "3",
      "complemento": "casa2",
      "cidade": "São Paulo",
      "uf": "SP",
      "cep": "01234-567"
    },
    {
      "logradouro": "Av. B",
      "numero": "45",
      "complemento": "casa3",
      "cidade": "Rio de Janeiro",
      "uf": "RJ",
      "cep": "12345-678"
    }
  ]

//filmes

[
    {
      "nome_filme": "A Freira 2",
      "linguagem_original": "Inglês",
      "classificacao_indicativa": "18",
      "duracao": "100 min"
    },
    {
      "nome_filme": "Ruim pra cachorro",
      "linguagem_original": "Inglês",
      "classificacao_indicativa": "16",
      "duracao": "93 min"
    },
    {
      "nome_filme": "O Exorcista",
      "linguagem_original": "Inglês",
      "classificacao_indicativa": "18",
      "duracao": "122 min"
    },
    {
      "nome_filme": "O Poderoso Chefão",
      "linguagem_original": "Inglês",
      "classificacao_indicativa": "16",
      "duracao": "120 min"
    },
    {
      "nome_filme": "Interestelar",
      "linguagem_original": "Inglês",
      "classificacao_indicativa": "12",
      "duracao": "169 min"
    },
    {
      "nome_filme": "Pulp Fiction",
      "linguagem_original": "Inglês",
      "classificacao_indicativa": "18",
      "duracao": "154 min"
    }
  ]

//preco
[
    {
      "dia_semana": "seg",
      "valor": 12.00
    },
    {
      "dia_semana": "ter",
      "valor": 15.00
    },
    {
      "dia_semana": "qua",
      "valor": 15.00
    },
    {
      "dia_semana": "qui",
      "valor": 16.00
    },
    {
      "dia_semana": "sex",
      "valor": 26.00
    },
    {
      "dia_semana": "sab",
      "valor": 26.00
    },
    {
      "dia_semana": "dom",
      "valor": 26.00
    }
  ]

  //programacao geral -- como fazer essa tabela considerando que um mesmo filme terá mais de um horário
  [
    {
      "id_filme_fk": 1,
      "data_horario": "2023-09-10 13:00",
      "tipo_linguagem": "L",
      "id_preco_fk": 1
    },
    {
      "id_filme_fk": 2,
      "data_horario": "2023-05-10 19:00",
      "tipo_linguagem": "L",
      "id_preco_fk": 2
    },
    {
      "id_filme_fk": 3,
      "data_horario": "2023-07-10 20:00",
      "tipo_linguagem": "D",
      "id_preco_fk": 3
    },
    {
      "id_filme_fk": 4,
      "data_horario": "2023-04-10 11:00",
      "tipo_linguagem": "D",
      "id_preco_fk": 4
    },
    {
      "id_filme_fk": 5,
      "data_horario": "2023-02-10 14:00",
      "tipo_linguagem": "D",
      "id_preco_fk": 5
    },
    {
      "id_filme_fk": 6,
      "data_horario": "2023-09-10 17:00",
      "tipo_linguagem": "L",
      "id_preco_fk": 6
    }
  ]

  //salas
  [
    {
      "capacidade": 70,
      "nome_sala": "Sala Diversão"
    },
    {
      "capacidade": 100,
      "nome_sala": "Sala Principal"
    },
    {
      "capacidade": 80,
      "nome_sala": "Sala Luz"
    }
  ]

//poltrona - inicia-se com a disponibilidade como true para setar o 
// estado para false quando esta nn estiver mais disponível
[
    {
      "tipo_poltrona": "Obeso",
      "disponibilidade": true
    },
    {
      "tipo_poltrona": "Cadeirante",
      "disponibilidade": true
    },
    {
      "tipo_poltrona": "Mobilidade reduzida",
      "disponibilidade": true
    },
    {
      "tipo_poltrona": "Acompanhante",
      "disponibilidade": true
    },
    {
      "tipo_poltrona": "Regular",
      "disponibilidade": true
    }
  ]
  

//sessao
//tirei tipo de sessao pois nao aparece no desenho do site
[
    {
      "id_filme_fk": 1,
      "id_programacao_geral_fk": 1,
      "sala_fk": 1,
      "id_poltrona_fk": 4
    },
    {
      "id_filme_fk": 2,
      "id_programacao_geral_fk": 2,
      "sala_fk": 2,
      "id_poltrona_fk": 3
    },
    {
      "id_filme_fk": 3,
      "id_programacao_geral_fk": 3,
      "sala_fk": 3,
      "id_poltrona_fk": 5
    },
    {
      "id_filme_fk": 4,
      "id_programacao_geral_fk": 4,
      "sala_fk": 2,
      "id_poltrona_fk": 2
    },
    {
      "id_filme_fk": 5,
      "id_programacao_geral_fk": 5,
      "sala_fk": 3,
      "id_poltrona_fk": 4
    },
    {
      "id_filme_fk": 6,
      "id_programacao_geral_fk": 6,
      "sala_fk": 1,
      "id_poltrona_fk": 5
    },
    {
      "id_filme_fk": 1,
      "id_programacao_geral_fk": 1,
      "sala_fk": 3,
      "id_poltrona_fk": 5
    },
    {
      "id_filme_fk": 2,
      "id_programacao_geral_fk": 1,
      "sala_fk": 3,
      "id_poltrona_fk": 2
    },
    {
      "id_filme_fk": 3,
      "id_programacao_geral_fk": 3,
      "sala_fk": 2,
      "id_poltrona_fk": 4
    },
    {
      "id_filme_fk": 4,
      "id_programacao_geral_fk": 4,
      "sala_fk": 2,
      "id_poltrona_fk": 3
    },
    {
      "id_filme_fk": 5,
      "id_programacao_geral_fk": 5,
      "sala_fk": 3,
      "id_poltrona_fk": 5
    },
    {
      "id_filme_fk": 6,
      "id_programacao_geral_fk": 6,
      "sala_fk": 2,
      "id_poltrona_fk": 2
    },
    {
      "id_filme_fk": 1,
      "id_programacao_geral_fk": 5,
      "sala_fk": 2,
      "id_poltrona_fk": 5
    },
    {
      "id_filme_fk": 2,
      "id_programacao_geral_fk": 2,
      "sala_fk": 2,
      "id_poltrona_fk": 3
    },
    {
      "id_filme_fk": 3,
      "id_programacao_geral_fk": 3,
      "sala_fk": 1,
      "id_poltrona_fk": 5
    }
  ]
  

//ingresso
// tipo de ingresso sempre true=inteira, quando false=meia
[
    {
        "tipo_ingresso": true,
        "id_preco_fk": 7,
        "id_sessao_fk": 1,
        "id_usuario_fk": 4
    },
    {
        "tipo_ingresso": true,
        "id_preco_fk": 1,
        "id_sessao_fk": 2,
        "id_usuario_fk": 4
    },
    {
        "tipo_ingresso": true,
        "id_preco_fk": 2,
        "id_sessao_fk": 8,
        "id_usuario_fk": 5
    },
    {
        "tipo_ingresso": true,
        "id_preco_fk": 3,
        "id_sessao_fk": 4,
        "id_usuario_fk": 3
    },
    {
        "tipo_ingresso": true,
        "id_preco_fk": 4,
        "id_sessao_fk": 5,
        "id_usuario_fk": 3
    }
]
