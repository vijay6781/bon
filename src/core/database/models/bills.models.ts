import { Model, DataTypes, Sequelize, Optional } from "sequelize";
import { User } from "./users.models";
import { DeletedAt } from "sequelize-typescript";

export interface BillAttributes {
  id: string;
  userId: string;
  amount: number;
  dueDate: string; // DATEONLY (YYYY-MM-DD)
  paymentDate?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  DeletedAt?:Date;
}

export interface BillCreationAttributes extends Optional<BillAttributes, "id"> {}

export class Bill
  extends Model<BillAttributes, BillCreationAttributes>
  implements BillAttributes
{
  public id!: string;
  public userId!: string;
  public amount!: number;
  public dueDate!: string;
  public paymentDate?: Date | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly DeletedAt!: Date;

}

export function initBillModel(sequelize: Sequelize) {
  Bill.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "user_id",
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: "due_date",
      },
      paymentDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "payment_date",
      },
    },
    {
      sequelize,
      tableName: "bills",
      underscored: true,
    }
  );

  return Bill;
}
