import pool from "./database-connection";

export class PgVehicleRepository {
  async create(vehicle: IVehicle): Promise<number> {
    const query = `
      INSERT INTO vehicle (plate, chassis, renavam, model, brand, year)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING id
    `;
    const values = [
      vehicle.plate,
      vehicle.chassis,
      vehicle.renavam,
      vehicle.model,
      vehicle.brand,
      vehicle.year,
    ];

    const result = await pool.query(query, values);
    await pool.end();
    return result.rows[0].id;
  }
}
