export class VehicleInMemoryRepository implements VehicleRepository {
  vehicles: IVehicle[] = [];

  async create(vehicle: IVehicle): Promise<void> {
    this.vehicles.push(vehicle);
  }

  async findAll(): Promise<IVehicle[]> {
    return this.vehicles;
  }

  async delete(chassi: string): Promise<void> {
    chassi;
  }

  async update(vehicle: IVehicle): Promise<void> {
    this.vehicles.push(vehicle);
  }
}
