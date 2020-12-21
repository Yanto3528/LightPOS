const productQuery = `CREATE TABLE IF NOT EXISTS product (
    product_id SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    cost INT NOT NULL,
    image VARCHAR(255),
    stock INT DEFAULT 0,
    user_id INT REFERENCES "user" (user_id) NOT NULL,
    category_id INT REFERENCES category (category_id),
    code VARCHAR(255),
    tax INT DEFAULT 0
  );`;

module.exports = productQuery;
