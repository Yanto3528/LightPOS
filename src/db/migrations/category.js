const categoryQuery = `
CREATE TABLE category (
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(255)
);`;

modules.exports = categoryQuery;
