/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

//time complexity: O(n^2) space complexity: O(1)
// function calculateTotalSpentByCategory(transactions) {
//   let result = [];
//   for (let i = 0; i < transactions.length; i++) {
//     // Check if the category is already in the result array
//     if (!result.some(res => res.category === transactions[i].category)) {
//       let total = 0;
//       for (let j = 0; j < transactions.length; j++) {
//         if (transactions[i].category === transactions[j].category) {
//           total += transactions[j].price;
//         }
//       }
//       let obj = {
//         category: transactions[i].category,
//         totalSpent: total,
//       };
//       result.push(obj);
//     }
//   }
//   return result;
// }

//optimised solution
//time complexity: O(n) space complexity: O(n)
function calculateTotalSpentByCategory(transactions) {
  let totals = {};
  for (let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    if (!totals[category]) {
      totals[category] = 0;
    }
    totals[category] += transactions[i].price;
  }

  let result = [];
  for (let category in totals) {
    result.push({
      category: category,
      totalSpent: totals[category],
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
