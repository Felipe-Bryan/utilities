export interface RouteProps {
  name: string;
  fields: string[];
}

function fieldLine(name: string) {
  return `app.get('/${name}/:${name}', new ${name}Controller().listBy${name});\n`;
}

export function routeMaker(props: RouteProps) {
  let line = `import { Router } from 'express';
import { ${props.name}Controller } from '../controllers/${props.name.toLowerCase()}.controller';

export const ${props.name.toLowerCase()}Routes = () => {
  const app = Router();

  app.get('/', new ${props.name}Controller().list);
  app.get('/:id', new ${props.name}Controller().get);
  app.post('/', new ${props.name}Controller().create);
  app.put('/:id', new ${props.name}Controller().update);
  app.delete('/:id', new ${props.name}Controller().delete);`;

  props.fields.forEach((field) => {
    line += fieldLine(field);
  });

  line += `return app;
};`;

  return line;
}
