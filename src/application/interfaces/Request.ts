export interface IRequest {
  body: Record<string, any>;
  params: Record<string, any>;
  headers: Record<string, string>;
  account?: {
    id: string;
    role: string;
  }
}
