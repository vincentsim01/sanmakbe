export interface RateRequest {
  originCountry: string; // ISO alpha-2, e.g. "SG"
  originPostalCode: string;
  destinationCountry: string;
  destinationPostalCode: string;
  destinationCity?: string;
  items: {
    description: string;
    quantity: number;
    weightKg: number; // per unit
    valuePerUnit: number;
  }[];
}

export interface ShippingRate {
  courierServiceId: string;
  courier: string; // e.g. "Ninja Van"
  service: string; // e.g. "Standard"
  cost: number;
  currency: string;
  minDeliveryDays?: number;
  maxDeliveryDays?: number;
}

// Abstract class so it can be used as a Nest injection token
export abstract class ShippingRateProvider {
  abstract getRates(req: RateRequest): Promise<ShippingRate[]>;
}