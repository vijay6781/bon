import { Attributes, Model } from 'sequelize';

export const clean = (object: Attributes<Model>): Attributes<Model> => {
  Object.keys(object).forEach((key: string) => {
    if ((object as any)[key] === undefined) {
      delete (object as any)[key];
    }
  });
  return object;
};
