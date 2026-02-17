
export enum AppStep {
  UPLOAD = 'UPLOAD',
  ANALYZING = 'ANALYZING',
  PAYMENT = 'PAYMENT',
  SUCCESS = 'SUCCESS'
}

export interface FileInfo {
  name: string;
  size: string;
  pages: number;
  format: string;
}

export interface OrderDetails {
  id: string;
  baseCost: number;
  uniqueCode: number;
  total: number;
  date: string;
  file?: FileInfo;
}
