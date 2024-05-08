export class UpdateVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(input: IVehicle): Promise<IVehicle> {
    const result = await this.vehicleRepository.update(input);
    return result;
  }
}
