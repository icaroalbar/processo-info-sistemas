import { Vehicle } from "./vehicle-entities";

export class CreateVehicleUseCase {
  constructor(private vehicleRepository: VehicleRepository) {}

  async send(input: IVehicle): Promise<void> {
    const vehicle = new Vehicle(input);
    await this.vehicleRepository.create(vehicle);
  }
}
