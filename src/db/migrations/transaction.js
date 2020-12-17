const transactionQuery = `CREATE TABLE "transaction"(
    transaction_id SERIAL PRIMARY KEY,
    total INT NOT NULL,
    user_id references "user" (id) NOT NULL,
    discount INT,
    payment_date DATETIME NOT NUll
  );`;

module.exports = transactionQuery;
