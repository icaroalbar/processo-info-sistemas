declare interface IVehicle {
  plate: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: number;
}

declare interface IVehicleId {
  id: string;
}

declare type IVehicleUpdate = IVehicle & IVehicleId;

declare interface VehicleRepository {
  create(vehicle: IVehicle): Promise<number>;
}
