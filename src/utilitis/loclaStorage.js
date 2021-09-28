


const AddToDb = item => {
  const db = getDb();
  if (item in db) {
    db[item] += 1;
  } else {
    db[item] = 1;
  }
  saveToDb(db);
}

const removeToDb = item => {
  const db = getDb();
  if (item in db) {
    delete db[item];
    saveToDb(db)
  }
}


const getDb = () => {

  let sevedDb = localStorage.getItem('shopping-cart');
  return sevedDb ? JSON.parse(sevedDb) : {};

};

const saveToDb = db => {
  const JSONDb = JSON.stringify(db);
  localStorage.setItem('shopping-cart', JSONDb);
}
export{removeToDb, AddToDb, getDb}