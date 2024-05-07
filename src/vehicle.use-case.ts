import { Vehicle } from "./vehicle.entities";

export class CreateVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(input: IVehicle): Promise<void> {
    const vehicle = new Vehicle(input);
    await this.vehicleRepository.create(vehicle.props);
  }
}
