type AlertMessageType = "success" | "info" | "warning" | "error";

export interface IAlertMessage {
  type: AlertMessageType;
  message: string;
}
