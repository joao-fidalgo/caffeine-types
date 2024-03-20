interface CaffeineNotificationList {
  New(): CaffeineNotificationList;
}

interface CaffeineNotification {
  AddNotification(icon: string, text: string, duration: number): void;
  New(
    list: CaffeineNotificationList,
    icon: string,
    text: string,
    duration: number
  ): CaffeineNotification;
  Remove(): void;
  RemoveAllNotifications(): void;
  RemoveNotification(notification: CaffeineNotification): void;
  Update(): void;
}
