export interface ControllerProps {
  generateId: boolean;
  name: string;
  fields: string[];
}

function importPropLine(name: string, parent: string) {
  return `import { List${parent}sBy${name}UseCase } from '../usecases/list-${parent.toLowerCase()}s-by-${name}.usecase';\n`;
}

function listByFieldLine(name: string, parent: string) {
  return `
  \npublic async listBy${name}(req: Request, res: Response) {
    try {
      const { ${name} } = req.params;

      const result = await new List${parent}sBy${name}UseCase().execute(${name});

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }\n`;
}

export function controllerMaker(props: ControllerProps) {
  let fieldsLine = '';

  props.fields.forEach((field) => {
    fieldsLine += `${field},\n`;
  });

  let line = `import { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/util/http-response.adapter';;
import { Create${props.name}UseCase } from '../usecases/create-${props.name.toLowerCase()}.usecase';
import { Delete${props.name}UseCase } from '../usecases/delete-${props.name.toLowerCase()}.usecase';
import { Get${props.name}ByIdUseCase } from '../usecases/get-${props.name.toLowerCase()}-byId.usecase';
import { List${props.name}sUseCase } from '../usecases/list-${props.name.toLowerCase()}s.usecase';
import { Update${props.name}UseCase } from '../usecases/update-${props.name.toLowerCase()}.usecase';\n`;

  props.fields.forEach((field) => {
    line += importPropLine(field, props.name);
  });

  line += `\n\nexport class ${props.name}Controller {
  public async create(req: Request, res: Response) {
    try {
      const {\n`;

  props.generateId ? (line += ``) : (line += `id,`);

  line += fieldsLine;

  line += `} = req.body;

      const result = await new Create${props.name}UseCase().execute({\n`;

  props.generateId ? (line += ``) : (line += `id,`);

  line += fieldsLine;

  line += `});

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const result = await new List${props.name}sUseCase().execute();

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new Get${props.name}ByIdUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const {\n`;

  line += fieldsLine;

  line += `} = req.body;

      const result = await new Update${props.name}UseCase().execute({
        id,\n`;

  line += fieldsLine;

  line += `});

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new Delete${props.name}UseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }\n`;

  props.fields.forEach((field) => {
    line += listByFieldLine(field, props.name);
  });

  line += `}`;

  return line;
}
