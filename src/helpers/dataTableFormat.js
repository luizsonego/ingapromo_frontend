import checkStatus from "./checkStatus";
import { fDate, fDateEpoch } from "./dateConvertEpochToHuman";

function dataTableFormat(column, value)
{
  switch (column) {
    case 'created_at':
      return fDate(value);
    
    case 'status':
      return checkStatus(value);
  
    case 'discount':
      return value;
    
    case 'discount_type':
      return value === 10 ? '%' : 'R$';
 
    case 'start_date':
      return fDateEpoch(value);
    
    case 'end_date':
      return fDateEpoch(value);
      
    default:
      return value;
  }

}

export default dataTableFormat;