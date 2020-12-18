const categoryQuery = `
CREATE TABLE IF NOT EXISTS category (
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(255)
);`;

module.exports = categoryQuery;
