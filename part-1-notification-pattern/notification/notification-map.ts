import {
  PlainNotificationsObject,
  NotificationMessages,
} from './notification-map.types';

export class NotificationMap<Key extends string = string> {
  private _map: Map<Key, NotificationMessages> = new Map();

  get size() {
    return this._map.size;
  }

  add(field: Key, ...message: NotificationMessages) {
    if (!this._map.has(field)) this._map.set(field, []);

    this._map.get(field)!.push(...message);
  }

  clear() {
    this._map.clear();
  }

  toPlain() {
    return Object.fromEntries(this._map) as PlainNotificationsObject<Key>;
  }

  toString = () => {
    return Array.from(this._map)
      .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
      .join('\n');
  };

  [Symbol.iterator]() {
    return this._map[Symbol.iterator]();
  }
}
