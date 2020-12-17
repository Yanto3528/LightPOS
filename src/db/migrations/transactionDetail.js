const transactionDetailQuery = `CREATE TABLE transaction_detail (
    transaction_detail_id SERIAL PRIMARY KEY,
    product_id INT references product (product_id) NOT NULL,
    transaction_id reference transaction (transaction_id) NOT NULL,
    quantity INT NOT NULL
  );`;

module.exports = transactionDetailQuery;
