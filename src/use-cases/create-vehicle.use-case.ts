export class CreateVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(input: IVehicle): Promise<void> {
    await this.vehicleRepository.create(input);
  }
}
