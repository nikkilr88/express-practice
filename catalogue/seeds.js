var mongoose = require("mongoose");
var Item = require("./models/item");

var items = [
  {
    name: "Faux Leather Wallet",
    type: "wallets",
    image: "./images/items/wallet.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod quisquam voluptas, quaerat facere ex!",
    price: 10,
    status: "OUT OF STOCK"
  },
  {
    name: "Leather Handbag",
    type: "purses",
    image: "./images/items/leatherpurse.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod quisquam voluptas, quaerat facere ex!",
    price: 30,
    status: "IN-STOCK"
  },
  {
    name: "Suede Purse",
    type: "purses",
    image: "./images/items/suedepurse.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod quisquam voluptas, quaerat facere ex!",
    price: 70,
    status: "IN-STOCK"
  },
  {
    name: "Lorem Ipsum Dolor",
    type: "faux-purses",
    image: "https://s20.postimg.org/k8midaay5/fashion-1478810_640.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod quisquam voluptas, quaerat facere ex!",
    price: 15,
    status: "IN-STOCK"
  },
  {
    name: "Lorem Ipsum Dolor",
    type: "wallets",
    image: "https://s20.postimg.org/k8midaay5/fashion-1478810_640.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod quisquam voluptas, quaerat facere ex!",
    price: 10,
    status: "IN-STOCK"
  },
  {
    name: "Lorem Ipsum Dolor",
    type: "faux-purses",
    image: "https://s20.postimg.org/k8midaay5/fashion-1478810_640.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod quisquam voluptas, quaerat facere ex!",
    price: 10,
    status: "IN-STOCK"
  }
];

function seedDB(){
    Item.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Items removed");
        
        items.forEach(function(seed){
           Item.create(seed, function(err, item){
               if(err){
                   console.log(err);
               } else {
                   console.log("Item created");
                   console.log(item);
               }
           });
        });
    });
}

module.exports = seedDB;