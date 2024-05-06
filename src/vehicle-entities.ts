import { IVehicle } from "./vehicle-repository";

export class Vehicle {
  public props: Required<IVehicle>;

  constructor(props: IVehicle) {
    this.props = { ...props };
  }
}
