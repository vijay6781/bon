import { Op, WhereOptions } from 'sequelize';
import { DateFilter } from '../dto/common.dto';

export const rangeFilter = (field: string, filter: DateFilter): { where: WhereOptions } => {
  if (filter.from && filter.to) {
    return { where: { [field]: { [Op.between]: [filter.from, filter.to] } } };
  }
  if (filter.from) {
    return { where: { [field]: { [Op.gt]: filter.from } } };
  }
  if (filter.from && filter.to) {
    return { where: { [field]: { [Op.lt]: filter.to } } };
  }
  return { where: {} };
};
