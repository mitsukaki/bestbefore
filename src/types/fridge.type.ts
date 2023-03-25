export interface FridgeItem {
  _id: string;
  name: string;
  expiry: string | null;
  quantity: number;
}

export interface Fridge {
  _id: string;
  items: FridgeItem[];
}

export interface AddFridgeItemsRequest {
  fridgeId: string;
  body: FridgeItem[];
}

export interface DeleteFridgeItemsRequest {
  fridgeId: string;
  body: string[];
}

export type FridgeItemsResponse = FridgeItem[];
