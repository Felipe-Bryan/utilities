export interface EntityColumnProps {
  name: string;
  type: 'string' | 'number' | 'boolean';
  decimal?: boolean;
  nullable: boolean;
  default?: string;
}

function columnMaker(props: EntityColumnProps) {
  let value: string | number | boolean = 0;

  if (props.type === 'string') {
    value = `'${props.default}'`;
  } else {
    value = `${props.default}`;
  }

  return `
  @Column({ 
  ${props.nullable ? `nullable: true,` : `nullable: false, `}${props.decimal ? `type: 'decimal', ` : ``}${
    props.default ? `default: ${value}, ` : ``
  }
   })
  ${props.name}: ${props.type};
  `;
}

export interface EntityProps {
  tableName: string;
  entityName: string;
  createDate?: boolean;
  updateDate?: boolean;
  columns: EntityColumnProps[];
}

export function entityMaker(props: EntityProps) {
  let line = `import { Entity, Column, PrimaryColumn, ${props.createDate ? `CreateDateColumn,` : ``} ${
    props.updateDate ? `UpdateDateColumn, ` : ``
  } } from 'typeorm';

@Entity('${props.tableName}')
export class ${props.entityName}Entity {
  @PrimaryColumn({
    type: 'uuid',
    nullable: false,
  })
  id: string;
  `;

  props.columns.forEach((column) => {
    line += columnMaker(column);
  });

  line += `${
    props.createDate
      ? `
  @CreateDateColumn()
  created: Date;`
      : ``
  }
  ${
    props.updateDate
      ? `  
  @UpdateDateColumn()
  updated: Date;`
      : ``
  }`;

  return line;
}
