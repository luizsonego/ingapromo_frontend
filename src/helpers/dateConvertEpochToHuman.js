import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function fDateEpoch(date) {
  return format(new Date(convertToEpoch(date)), 'dd MMMM yyyy', {locale: ptBR});
}

export function fDateEpochWithHours(date) {
  return format(new Date(convertToEpoch(date)), 'dd MMMM yyyy HH:mm', {locale: ptBR});
}

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy', {locale: ptBR});
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}

export function fEpoch(date) {
  return new Date(date).toLocaleString();
}

export function convertToEpoch(date) {
  var myDate = new Date(date * 1000);
  return myDate.getTime();
}

export function fEndDate(date) {
  return formatDistanceToNow(new Date(convertToEpoch(date)), { addSuffix: true, locale: ptBR });
}
