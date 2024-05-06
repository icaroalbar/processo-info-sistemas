declare interface IVehicle {
  plate: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: string;
}

declare interface IVehicleId {
  id: string;
}

declare type IVehicleUpdate = IVehicle & IVehicleId;

declare interface VehicleRepository {
  create(vehicle: Vehicle): Promise<void>;
}
