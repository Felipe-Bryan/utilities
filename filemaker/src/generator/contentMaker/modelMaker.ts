export interface ModelField {
  name: string;
  type: 'string' | 'number' | 'boolean';
}

export interface ModelProps {
  generateId: boolean;
  name: string;
  fields: ModelField[];
  createDate?: boolean;
  updateDate?: boolean;
}

export function modelMaker(props: ModelProps) {
  let line = '';

  props.generateId === true ? (line += `import { v4 } from 'uuid';\n\n`) : '';

  line += `export class ${props.name} {\n`;

  props.generateId === true
    ? (line += `private _id: string;\n\nconstructor(`)
    : (line += `constructor(\nprivate _id: string,\n`);

  props.fields.forEach((field) => {
    line += `private _${field.name}: ${field.type},\n`;
  });

  props.createDate ? (line += `private _created: Date,\n`) : ``;
  props.updateDate ? (line += `private _updated: Date\n`) : ``;

  line += `) {
  this._id = ${props.generateId ? `v4()` : `_id`};\n`;

  props.fields.forEach((field) => {
    line += `this._${field.name} = _${field.name};\n`;
  });

  line += `}

    public get id(): string {
    return this._id;
  }    
    public set id(id: string) {
    this._id = id;
  }\n`;

  props.createDate
    ? `
  public get created(): Date {
    return new Date(this._created!);
  }
  public set created(date: Date) {
    this._created = date;
  }\n`
    : ``;

  props.updateDate
    ? `
  public get updated(): Date {
    return this._updated!;
  }
  public set updated(date: Date) {
    this._updated = date;
  }\n`
    : ``;

  props.fields.forEach((field) => {
    line += `
  public get ${field.name}(): ${field.type} {
    return this._${field.name};
  }
  public set ${field.name}(${field.name}: ${field.type}) {
    this._${field.name} = ${field.name};
  }\n`;
  });

  line += `
  public toJson() {
    return {
      id: this._id,\n`;

  props.createDate ? `created: Date.parse(String(this._created)),\n` : ``;
  props.updateDate ? `updated: Date.parse(String(this._updated)),\n` : ``;

  props.fields.forEach((field) => {
    if (field.type === 'boolean') {
      line += `${field.name}: Boolean(this._${field.name}),\n`;
    } else if (field.type === 'number') {
      line += `${field.name}: Number(this._${field.name}),\n`;
    } else {
      line += `${field.name}: this._${field.name},\n`;
    }
  });

  line += `};
  }

  public static create(entity: any) {
    const created = new ${props.name}(\n`;

  props.generateId ? `` : `entity.id,\n`;

  props.createDate ? (line += `entity.created,\n`) : ``;
  props.updateDate ? (line += `entity.updated,\n`) : ``;

  props.fields.forEach((field) => {
    line += `entity.${field.name},\n`;
  });

  line += `);\n`;

  props.generateId ? (line += `created.id = entity.id;\n`) : ``;

  line += `return created;
  }
}`;

  return line;
}
