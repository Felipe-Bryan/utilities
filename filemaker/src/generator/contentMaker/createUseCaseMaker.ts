export interface UseCaseProps {
  generateId: boolean;
  name: string;
  fields: UseCaseFieldProps[];
}

export interface UseCaseFieldProps {
  name: string;
  type: string;
}

export function createUseCaseMaker(props: UseCaseProps) {
  let line = `import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { ${props.name} } from '../../../models/${props.name.toLowerCase()}.model';
import { ${props.name}Repository } from '../repositories/${props.name.toLowerCase()}.repository';

interface Create${props.name}Params {\n`;

  props.generateId ? `` : (line += `id: string,\n`);

  props.fields.forEach((field) => {
    line += `${field.name}: ${field.type},\n`;
  });

  line += `}

export class Create${props.name}UseCase {
  public async execute(params: Create${props.name}Params): Promise<Result> {
    const ${props.name.toLowerCase()} = new ${props.name}(\n`;

  props.generateId ? `` : (line += `params.id,\n`);

  props.fields.forEach((field) => {
    line += `params.${field.name},\n`;
  });

  line += `);

    const result = await new ${props.name}Repository().create(${props.name});

    return Return.created(result.toJson(), '${props.name} created');
  }
} // await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis`;

  return line;
}
