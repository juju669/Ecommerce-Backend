const seedCategories = require('./Develop/seeds/category-seeds');
const seedProducts = require('./Develop/seeds/product-seeds');
const seedTags = require('./Develop/seeds/tag-seeds');
const seedProductTags = require('./Develop/seeds/product-tag-seeds');

const sequelize = require('./Develop/config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
