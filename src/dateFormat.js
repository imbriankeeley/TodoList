import { addDays, format } from "date-fns";


export class DateFormat {

    formatDate(date) {
        date = addDays(date, 1);
        return format(date, 'MM-dd-yyyy');
    }

}

export default DateFormat;