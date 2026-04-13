import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  await db.query("DELETE FROM employees");
  for (let i = 0; i < 15; i++) {
    const employee = {
      name: faker.person.fullName(),
      birthday: faker.date.birthdate(),
      salary: faker.number.int({ min: 75000, max: 150000 }),
    };
    await createEmployee(employee);
  }
}
