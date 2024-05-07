export class VehicleInMemoryRepository implements VehicleRepository {
  vehicles: IVehicle[] = [];

  async create(vehicle: IVehicle): Promise<any> {
    this.vehicles.push(vehicle);
  }
  async findAll(): Promise<IVehicle[]> {
    return this.vehicles;
  }
}
