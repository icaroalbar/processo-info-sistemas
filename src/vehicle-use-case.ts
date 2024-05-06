import { Vehicle } from "./vehicle-entities";
import { IVehicle, VehicleRepository } from "./vehicle-repository";

export class CreateVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async send(input: IVehicle): Promise<void> {
    const vehicle = new Vehicle(input);
    await this.vehicleRepository.create(vehicle.props);
  }
}
