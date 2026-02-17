
export enum AppState {
  UPLOAD = 'UPLOAD',
  CALCULATING = 'CALCULATING',
  PAYMENT = 'PAYMENT',
  CONFIRMED = 'CONFIRMED'
}

export interface PrintJob {
  fileName: string;
  fileSize: string;
  pageCount: number;
  inkLevel: 'Low' | 'Medium' | 'High';
  cost: number;
  uniqueCode: number;
  total: number;
  timestamp: string;
  orderId: string;
}

export enum NavTab {
  UPLOAD = 'UPLOAD',
  HISTORY = 'HISTORY',
  SETTINGS = 'SETTINGS',
  RECEIPT = 'RECEIPT'
}
