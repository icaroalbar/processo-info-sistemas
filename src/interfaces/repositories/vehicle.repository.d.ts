declare interface IVehicle {
  plate: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: number;
}

declare interface VehicleRepository {
  create(vehicle: IVehicle): Promise<void>;
  findAll(): Promise<IVehicle[]>;
  delete(chassis: string): Promise<void>;
  update(vehicle: IVehicle): Promise<IVehicle>;
}
