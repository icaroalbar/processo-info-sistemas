export class Vehicle {
  public readonly props: Required<IVehicle>;

  constructor(props: IVehicle) {
    this.props = { ...props };
  }
}
