export class FindAllVehicles {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(): Promise<IVehicle[]> {
    const result = await this.vehicleRepository.findAll();
    return result;
  }
}
