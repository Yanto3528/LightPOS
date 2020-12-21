const transactionQuery = `CREATE TABLE IF NOT EXISTS transaction(
    transaction_id SERIAL PRIMARY KEY,
    total INT NOT NULL,
    user_id INT REFERENCES "user" (user_id) NOT NULL,
    discount INT,
    payment_date TIMESTAMP NOT NUll
  );`;

module.exports = transactionQuery;
