export class UpdateVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(input: IVehicle): Promise<void> {
    this.vehicleRepository.update(input);
  }
}
