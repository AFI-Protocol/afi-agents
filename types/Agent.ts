export interface Agent {
  id: string;
  name: string;
  tags: string[];
  active: boolean;
  engage: (input: any) => Promise<any>;
}
