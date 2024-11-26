export interface RepositoryFields {
  name: string;
  type: 'string' | 'number' | 'boolean';
}

export interface RepositoryProps {
  name: string;
  fields: RepositoryFields[];
}

function propLine(name: string, parent: string) {
  return `${name}: ${parent}.${name},`;
}

function listByProp(prop: RepositoryFields) {
  return `
public async listBy${prop.name}(${prop.name}: ${prop.type}) {
  const results = await this.connection.findBy({ ${prop.name} });

  return results.map((entity) => OrderRepository.toModel(entity));
}\n`;
}

export function repositoryMaker(props: RepositoryProps) {
  let fieldsLine = '';
  let listByPropsLine = '';

  props.fields.forEach((field) => {
    fieldsLine += propLine(field.name, props.name.toLowerCase());
    listByPropsLine += listByProp(field);
  });

  let line = `import { Database } from '../../../../main/database/database.connection';
import { ${props.name}Entity } from '../../../shared/database/entities/${props.name.toLowerCase()}.entity';
import { ${props.name} } from '../../../models/${props.name.toLowerCase()}.model';

export class ${props.name}Repository {
  private connection = Database.connection.getRepository(${props.name}Entity);

  public async create(${props.name.toLowerCase()}: ${props.name}) {
    const ${props.name.toLowerCase()}Entity = this.connection.create({
      id: ${props.name.toLowerCase()}.id,\n`;

  line += fieldsLine;

  line += `});

    const results = await this.connection.save(${props.name.toLowerCase()}Entity);

    return ${props.name}Repository.toModel(results);
  }

  public async list() {
    const results = await this.connection.find();

    return results.map((entity) => ${props.name}Repository.toModel(entity));
  }

  public async get(id: string) {
    const result = await this.connection.findOneBy({ id });

    if (!result) {
      return undefined;
    }

    return ${props.name}Repository.toModel(result);
  }

  public async update(${props.name}: ${props.name}) {
    await this.connection.update(
      { id: ${props.name.toLowerCase()}.id },
      {\n`;

  line += fieldsLine;

  line += `}
    );
  }

  public async delete(id: string) {
    const result = await this.connection.delete({ id });

    return result.affected ?? 0;
  }\n`;

  line += listByPropsLine;

  line += `public static toModel(entity: ${props.name}Entity | null): ${props.name} {
    return ${props.name}.create(entity);
  }
}`;

  return line;
}
