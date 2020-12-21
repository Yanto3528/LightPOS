const transactionDetailQuery = `CREATE TABLE IF NOT EXISTS transaction_detail (
    transaction_detail_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES product (product_id) NOT NULL,
    transaction_id INT REFERENCES transaction (transaction_id) NOT NULL,
    quantity INT NOT NULL
  );`;

module.exports = transactionDetailQuery;
