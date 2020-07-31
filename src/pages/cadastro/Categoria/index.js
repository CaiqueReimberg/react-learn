import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Button } from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState('Valor Inicial');

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infoDoEvento) {
    const { getAttribute, value } = infoDoEvento.target;

    setValue(getAttribute('name'), value);
  }

  useEffect(() => {
    const URL = "http://localhost:3001/categorias";

    fetch((URL).then(
      async (resposta) => {
        const respostaServer = await resposta.json();
        setCategorias([
          ...respostaServer,
        ]);
      },
    ));
  });

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        { values.nome }
      </h1>

      <form onSubmit={function handleSubmit(infoDoEvento) {
        infoDoEvento.preventDefault();
        setCategorias([...categorias, values]);
        setValues({ valoresIniciais });
      }}
      >

        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Descrição"
          value={values.descricao}
          type="text"
          name="descricao"
          onChange={handleChange}
        />

        <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div>
        <Button>
          Cadastrar
        </Button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => (
          // Igual a categoria + indice
          <li key={`${categoria}${indice}`}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
