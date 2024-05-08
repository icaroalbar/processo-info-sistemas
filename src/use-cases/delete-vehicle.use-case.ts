export class DeleteVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(chassis: string): Promise<void> {
    await this.vehicleRepository.delete(chassis);
  }
}
