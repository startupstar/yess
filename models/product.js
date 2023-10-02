const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Product {
  constructor(title, price, description, imageUrl, pdf) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.status = 'pending'
    this.pdf = pdf
  }

  save() {
    const db = getDb();
    return db
      .collection('products')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }


  static updateStatus(id, status) {
    const db = getDb();
    return db.collection('products')
      .updateOne(
        { _id: mongodb.ObjectId(id) },
        { $set: { status } }
      )
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static deleteProduct(id) {
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({ _id: mongodb.ObjectId(id) })
      .then(() => {
        return true;
      })
      .catch(err => {
        console.log(err);
      });
  }


}

module.exports = Product;
