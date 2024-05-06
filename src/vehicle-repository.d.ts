declare interface IVehicle {
  plate: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: string;
}

declare interface VehicleRepository {
  create(vehicle: Vehicle): Promise<void>;
}
