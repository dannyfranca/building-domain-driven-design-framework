export type NotificationMessages = string[];

export type PlainNotificationsObject<T extends string = string> = {
  [P in T]?: string[];
};
