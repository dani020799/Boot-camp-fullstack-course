// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 }
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const name of items) {
        const entry = inventory[name];
        if (!entry) return reject(new Error(`Item not found: ${name}`));
        if (entry.stock <= 0) return reject(new Error(`Out of stock: ${name}`));
      }
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const subtotal = items.reduce((sum, name) => sum + inventory[name].price, 0);
        const tax = +(subtotal * 0.08).toFixed(2);
        const total = +(subtotal + tax).toFixed(2);
        resolve({ subtotal, tax, total });
      } catch (err) {
        reject(new Error('Failed to calculate total'));
      }
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.9; // 90% success
      if (success) {
        const transactionId = `tx_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
        resolve({ transactionId, amount, status: 'success' });
      } else {
        reject(new Error('Payment processing failed'));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (const name of items) {
        if (inventory[name]) inventory[name].stock = Math.max(0, inventory[name].stock - 1);
      }
      // return a shallow snapshot for only the items in the order
      const snapshot = items.reduce((acc, n) => {
        acc[n] = { ...inventory[n] };
        return acc;
      }, {});
      resolve(snapshot);
    }, 300);
  });
}

function checkout(itemNames) {
  return new Promise((resolve, reject) => {
    checkInventory(itemNames)
      .then(() => calculateTotal(itemNames))
      .then(totalObj => {
        return processPayment(totalObj.total)
          .then(paymentResult => ({ totalObj, paymentResult }));
      })
      .then(({ totalObj, paymentResult }) => {
        return updateInventory(itemNames)
          .then(updated => ({ totalObj, paymentResult, updated }));
      })
      .then(final => {
        resolve({
          success: true,
          items: itemNames.slice(),
          total: final.totalObj,
          payment: final.paymentResult,
          updatedInventory: final.updated
        });
      })
      .catch(err => {
        reject(err);
      });
  });
}

// Test cases:
checkout(['laptop', 'mouse'])
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop'])
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));