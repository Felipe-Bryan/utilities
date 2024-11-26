import { ModelField, modelMaker } from './generator/contentMaker/modelMaker';

const field1: ModelField = {
  name: 'nome',
  type: 'string',
};

const field2: ModelField = {
  name: 'preco',
  type: 'number',
};

const field3: ModelField = {
  name: 'ativo',
  type: 'boolean',
};

console.log(
  modelMaker({
    name: 'ModelTest',
    generateId: false,
    createDate: true,
    updateDate: true,
    fields: [field1, field2, field3],
  })
);
