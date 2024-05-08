export class Vehicle {
  public readonly props: IVehicle;

  constructor(props: IVehicle) {
    this.props = { ...props };
  }
}
