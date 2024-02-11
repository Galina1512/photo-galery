import { format } from 'date-fns';

export const formatDate = (date) => {
    const formattedDate = format(new Date(date), 'dd.MM.yyyy');

    return formattedDate;
}
