import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const dataDirectory = path.join(__dirname, 'seedData');

const orderedFileNames = [
  'products.json',
  'sales.json',
  'purchases.json',
  'salesSummary.json',
  'purchaseSummary.json',
  'users.json',
  'expenses.json',
  'expenseSummary.json',
  'expenseByCategory.json',
];

const deletionOrderFileNames = [
  'sales.json',
  'purchases.json',
  'salesSummary.json',
  'purchaseSummary.json',
  'products.json',
  'users.json',
  'expenseByCategory.json',
  'expenseSummary.json',
  'expenses.json',
];

async function deleteAllData(fileNames: string[]) {
  for (const fileName of fileNames) {
    const modelName = getModelNameFromFileName(fileName);
    const model: any = prisma[modelName as keyof typeof prisma];

    if (model) {
      try {
        await model.deleteMany({});
        console.log(`Deleted data from ${modelName}`);
      } catch (error) {
        console.error(`Failed to delete data from ${modelName}:`, error);
      }
    } else {
      console.error(`No Prisma model matches the file name: ${fileName}`);
    }
  }
}

function getModelNameFromFileName(fileName: string): string {
  return path.basename(fileName, path.extname(fileName));
}

async function seedData(fileName: string) {
  const modelName = getModelNameFromFileName(fileName);
  const model: any = prisma[modelName as keyof typeof prisma];

  if (!model) {
    console.error(`No Prisma model matches the file name: ${fileName}`);
    return;
  }

  try {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    for (const data of jsonData) {
      await model.create({ data });
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  } catch (error) {
    console.error(`Failed to seed ${modelName} from ${fileName}:`, error);
  }
}

async function main() {
  try {
    // Delete all existing data
    await deleteAllData(deletionOrderFileNames);

    // Seed new data
    for (const fileName of orderedFileNames) {
      await seedData(fileName);
    }
  } catch (error) {
    console.error('An error occurred during the seeding process:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error('Error in main function:', error);
  process.exit(1);
});