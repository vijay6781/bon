import { Injectable } from '@nestjs/common';
import { BillDTO } from './dto/create-bill.dto';
import { Bill } from 'src/core/database/models/bills.models';
import { Reward } from 'src/core/database/models/rewards.models';
import { Op } from 'sequelize';

@Injectable()
export class BillsService {
    async createBill(billDTO: BillDTO, userId: string) {
        const billData = {
            userId,
            ...billDTO,
            paymentDate: billDTO.paymentDate ? new Date(billDTO.paymentDate) : undefined
        };
        return Bill.create(billData);
    }


// Helper: checks last consecutive on-time payments ending at given bill
private async checkAndGenerateReward(userId: string, triggeringBillId: string) {
  const triggeringBill = await Bill.findByPk(triggeringBillId);
  if (!triggeringBill) return null;
  if (!triggeringBill.paymentDate) return null; // not paid

  // Get bills with dueDate <= triggeringBill.dueDate, most recent first
  const bills = await Bill.findAll({
    where: {
      userId,
      dueDate: { [Op.lte]: triggeringBill.dueDate }
    },
    order: [["dueDate", "DESC"]],
    limit: 3 // we only need to scan back until a late/unpaid bill
  });

  let consecutiveOnTime = 0;
  for (const b of bills) {
    if (!b.paymentDate) break; // unpaid bill breaks the streak
    const paid = new Date(b.paymentDate);
    const due = new Date(b.dueDate + "T23:59:59"); // consider full due day
    if (paid <= due) {
      consecutiveOnTime++;
    } else {
      break; 
    }
    
  }

  if (consecutiveOnTime >= 3) {
    const exists = await Reward.findOne({ where: { triggeringBillId } });
    if (exists) return null;

    const reward = await Reward.create({
      userId,
      triggeringBillId,
      description: "$10 Amazon Gift Card",
      amount: 10,
      issuedAt: new Date()
    });
    return reward;
  }
  return null;
}

async payBill(billDTO:BillDTO, userId:string , billId:string ){
        const bill= await  Bill.findOne( {where: {userId, id:billId}});
        if(!bill) return "bill not found";

        if(!bill.paymentDate){
            bill.paymentDate= new Date();
            await bill.save()
        }
       const Reward=  await this.checkAndGenerateReward(userId, billId);
        return {bill, reward: Reward};
    }
}
