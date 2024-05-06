declare interface Vehicle {
  id: string;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: string;
}

declare interface VehicleRepository {
  create(vehicle: Vehicle): Promise<void>;
  findById(id: string): Promise<Vehicle | null>;
}
