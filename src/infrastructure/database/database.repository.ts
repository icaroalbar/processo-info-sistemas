import pool from "./database-connection";

export class PgVehicleRepository {
  async create(vehicle: IVehicle): Promise<void> {
    try {
      const query = `
      INSERT INTO vehicle (plate, chassis, renavam, model, brand, year)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
      const values = [
        vehicle.plate,
        vehicle.chassis,
        vehicle.renavam,
        vehicle.model,
        vehicle.brand,
        vehicle.year,
      ];

      await pool.query(query, values);
    } finally {
      (await pool.connect()).release(true);
    }
  }

  async findAll(): Promise<IVehicle[]> {
    try {
      const query = `SELECT 
      plate,
      chassis,
      renavam,
      model,
      brand,
      year FROM vehicle`;

      const result = await pool.query(query);
      return result.rows;
    } finally {
      (await pool.connect()).release(true);
    }
  }

  async delete(chassis: string): Promise<void> {
    try {
      const query = `
      DELETE FROM vehicle WHERE chassis = $1
    `;
      const values = [chassis];

      await pool.query(query, values);
    } finally {
      (await pool.connect()).release(true);
    }
  }

  async update(vehicle: IVehicle): Promise<void> {
    try {
      const query = `
      UPDATE vehicle SET plate=$1, renavam=$2, model=$3, brand=$4, year=$5
      WHERE chassis=$6
    `;
      const values = [
        vehicle.plate,
        vehicle.renavam,
        vehicle.model,
        vehicle.brand,
        vehicle.year,
        vehicle.chassis,
      ];

      await pool.query(query, values);
    } finally {
      (await pool.connect()).release(true);
    }
  }
}
