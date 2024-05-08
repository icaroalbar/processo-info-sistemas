export class VehicleInMemoryRepository implements VehicleRepository {
  vehicles: IVehicle[] = [];

  async create(vehicle: IVehicle): Promise<void> {
    this.vehicles.push(vehicle);
  }
  async findAll(): Promise<IVehicle[]> {
    return this.vehicles;
  }

  async delete(chassi: IVehicleId): Promise<void> {
    console.log(chassi);
  }
}
