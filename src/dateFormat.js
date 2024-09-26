import { format } from "date-fns";


export class DateFormat {

    formatDate(date) {
        return format(date, 'MM-dd-yyyy');
    }

}

export default DateFormat;