import { subDays, addDays, format } from "date-fns";


export class DateFormat {

    formatDate(date) {
        date = addDays(date, 1);
        return format(date, 'MM-dd-yyyy');
    }

    subDays(date) {
        date = subDays(date, 1);
        return format(date, 'MM-dd-yyyy');
    }

}

export default DateFormat;