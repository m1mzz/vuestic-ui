import Vue, { VNode } from 'vue'
export type MessageType = 'success' | 'warning' | 'info' | 'error';

export type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

/** Notification Component */
export declare class NotificationComponent extends Vue {
  /** Close the Notification instance */
  close? (id: string, userOnClose: () => void): void

  closeAll? (): void
}

export interface NotificationOptions {
  /** Title */
  title?: string

  /** Description text */
  message: string | VNode

  /** Notification type */
  type?: MessageType

  /** Custom icon's class. It will be overridden by type */
  iconClass?: string

  /** Custom class name for Notification */
  customClass?: string

  /** Duration before close. It will not automatically close if set 0 */
  duration?: number

  /** Whether to show a close button */
  showClose?: boolean

  /** Whether message is treated as HTML string */
  dangerouslyUseHTMLString?: boolean

  /** Callback function when closed */
  onClose?: () => void

  /** Callback function when notification clicked */
  onClick?: () => void

  /** Offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset */
  offset?: number

  /** custom position */
  position?: NotificationPosition

  id?: string

  verticalOffset?: number

  visible?: boolean

  // id?: string
}

export interface NotificationInterface {
  /** Show a notification */
  (options: NotificationOptions | string): NotificationComponent

  /** Show a success notification */
  success? (message: string | VNode): NotificationComponent

  /** Show a success notification */
  success? (options: NotificationOptions): NotificationComponent

  /** Show a warning notification */
  warning? (message: string | VNode): NotificationComponent

  /** Show a warning notification */
  warning? (options: NotificationOptions): NotificationComponent

  /** Show an info notification */
  info? (message: string | VNode): NotificationComponent

  /** Show an info notification */
  info? (options: NotificationOptions): NotificationComponent

  /** Show an error notification */
  error? (message: string | VNode): NotificationComponent

  /** Show an error notification */
  error? (options: NotificationOptions): NotificationComponent

}