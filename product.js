app.get("/product/:productId", (req, res) => {
  const productId = req.body.params;
  if (!productId) return res.status(400).send("ProductId requeierd !");

  db.query(`SELECT * FROM products WHERE id=?`, [productId], (err, result) => {
    if (err) {
      console.log(`DB query for product error : ${err}`);
      return res.status(500).send("Ops something wrong , Try again"); // we don't need to return any details about the error to client side
    }

    if (!result) {
      return res.status(404).send("Product Not Found !");
    }

    return res.status(200).send(result);
  });
});
