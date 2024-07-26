import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export const formatDate = (dateString: string): string => {
  return format(new Date(dateString), 'dd MMMM yyyy, HH:mm', { locale: uk });
};
