export interface IVehicle {
  plate: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: number;
}

export interface IVehicleId {
  id: string;
}

export type IVehicleUpdate = IVehicle & IVehicleId;

export interface VehicleRepository {
  create(vehicle: IVehicle): Promise<void>;
}
