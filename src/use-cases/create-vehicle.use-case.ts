import { Vehicle } from "../entities/vehicle.entities";

export class CreateVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(input: IVehicle): Promise<number> {
    const vehicle = new Vehicle(input);
    const result = await this.vehicleRepository.create(vehicle.props);
    return result;
  }
}
