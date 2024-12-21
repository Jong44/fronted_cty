import moment from 'moment';
import 'moment/locale/id'; 

export default function formatDate(timestamp) {
    moment.locale('id');
    return moment(timestamp).format('DD MMMM YYYY - HH:mm:ss')
}