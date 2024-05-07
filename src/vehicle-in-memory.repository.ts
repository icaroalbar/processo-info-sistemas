export class VehicleInMemoryRepository implements VehicleRepository {
  vehicles: IVehicle[] = [];

  async create(vehicle: IVehicle): Promise<void> {
    this.vehicles.push(vehicle);
  }
}
