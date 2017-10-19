import { Pipe } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe {
  transform(value) {
    let result :string;
    switch(value){
        case 'WAITAUDIT'://待审核
            result = '待审核';
            break;
        case 'WAITPAY'://待付款
            result = '待付款'
            break;
        case 'WAITRETURN'://待还款
            result = '待还款'
            break;
        case 'HASRETURN'://已还款
            result = '已还款'
            break;
        case 'HASLEND'://已借款
            result = '已借款'
            break;
        case 'WAITTHAW'://待解冻
            result = '待解冻'
            break;
        case 'WAITANALISIS':
            result = '待分析'
            break;
        case 'WAITCHECK':
            result = '待核对'
            break;
        case 'HASREIM':
            result = '已报销'
            break;
        case 'ALL':
            result = '全部'
            break;
        default :
            result = value;
            break;
        }
    return result;
  }
}
