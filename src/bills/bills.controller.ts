import { Body, Controller, Param, ParseUUIDPipe, Post, Req } from '@nestjs/common';
import { BillsService } from './bills.service';
import { ApiTags } from '@nestjs/swagger';
import { BillDTO } from './dto/create-bill.dto';

@ApiTags('Bills')
@Controller('bills')
export class BillsController {
    constructor(private readonly billService: BillsService) {}
    @Post('/users/:userId/bills/create')
    createBill(@Body() billDTO: BillDTO, @Param('userId', ParseUUIDPipe) userId: string ) {
        return this.billService.createBill(billDTO, userId);
    }
    @Post('/users/:userId/billId/:billId/pay')
    payBill(@Body() billDTO: BillDTO, @Param('userId', ParseUUIDPipe) userId: string ,@Param('billId', ParseUUIDPipe) billId: string) {
        return this.billService.payBill(billDTO, userId, billId);
    }
    
}
