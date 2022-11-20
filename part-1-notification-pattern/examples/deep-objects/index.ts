import { NotificationMap } from '../../notification/notification-map';
import { KeysOfDeepObject, Person } from './types';

const notification = new NotificationMap<KeysOfDeepObject<Person>>();

notification.add('name', 'Name is required');
notification.add('address', 'address object has invalid values');
notification.add('address.postcode', 'Postcode is required');

console.log('string notification:');
console.log(notification.toString());
console.log('plain object notification:');
console.log(notification.toPlain());
