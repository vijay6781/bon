import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface RewardAttributes {
  id: string;
  userId: string;
  triggeringBillId: string;
  description: string;
  amount: number;
  issuedAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RewardCreationAttributes
  extends Optional<RewardAttributes, "id" | "issuedAt"> {}

export class Reward
  extends Model<RewardAttributes, RewardCreationAttributes>
  implements RewardAttributes
{
  public id!: string;
  public userId!: string;
  public triggeringBillId!: string;
  public description!: string;
  public amount!: number;
  public issuedAt!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initRewardModel(sequelize: Sequelize) {
  Reward.init(
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
      triggeringBillId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        field: "triggering_bill_id",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      issuedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: "issued_at",
      },
    },
    {
      sequelize,
      tableName: "rewards",
      underscored: true,
    }
  );

  return Reward;
}
