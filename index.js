// 1. Problem: "Alien Language Translator"
// (Strings & Loops)

function reverseWords(sentences) {
  let words = sentences.split(" ");

  let reversedWords = words.map((word) => word.split("").reverse().join(""));

  return reversedWords.join(" ");
}

// reverseWords("olleH dlroW");
// console.log(reverseWords("olleH dlroW"));
// reverseWords("Abul Hossain");
// console.log(reverseWords("Abul Hossain"));

reverseWords("lubA niassoH");
console.log(reverseWords("lubA niassoH"));

// ## 2. **Problem: "The Treasure Hunter’s Lost Numbers"**
// **(Numbers & Loops)**

function fillMissingNumbers(arr) {
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === null) {
      arr[i] = (arr[i - 1] + arr[i + 1]) / 2;
    }
  }
  return arr;
}

fillMissingNumbers([10, null, 20, null, 30]);
console.log(fillMissingNumbers([10, null, 20, null, 30]));

// 3. Problem: "Pirate’s Parrot’s Shopping List" (Arrays & Loops)
function removeDuplicates(shoppingList) {
  let uniqueItems = [];

  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];

    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }
  return uniqueItems;
}

removeDuplicates(["rum", "gold", "parrot food", "rum", "gold", "map"]);
console.log(
  removeDuplicates(["rum", "gold", "parrot food", "rum", "gold", "map"])
);

// 4. Problem: "Knight's Stairs to the Dragon" (Numbers & Loops)

function countWaysToClimb(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;

  let ways = [1, 1, 2, 4];

  for (let i = 4; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3];
  }
  return ways[n];
}

countWaysToClimb(4);

console.log(countWaysToClimb(4));

// 5. Problem: "Chef's Salad Mix-Up" (Strings, Arrays & Loops)

function splitIngredients(ingredients) {
  let result = [];
  let word = "";

  for (let i = 0; i < ingredients.length; i++) {
    let char = ingredients[i];

    if (char === char.toUpperCase() && word.length > 0) {
      result.push(word.toLowerCase());
      word = char;
    } else {
      word += char;
    }
  }

  result.push(word.toLowerCase());

  return result;
}

splitIngredients("TomatoesOnionsLettuce");
console.log(splitIngredients("TomatoesOnionsLettuce"));

// 6. Problem: "The King's Gold Distribution" (Numbers & Loops)

function totalCoinsForKnights(n) {
  let totalCoins = 0;

  for (let i = 1; i <= n; i++) {
    totalCoins += i;
  }

  return totalCoins;
}
totalCoinsForKnights(5);
console.log(totalCoinsForKnights(5));

// 7. Problem: "Dragon’s Age Puzzle" (Numbers & Conditions)
function checkPerfectSquare(number) {
  let sqrt = Math.sqrt(number);

  if (Math.floor(sqrt) * Math.floor(sqrt) === number) {
    return number;
  } else {
    return "Try again!";
  }
}
checkPerfectSquare(49);
console.log(checkPerfectSquare(49));

// 8. Problem: "Magical Phrase Reverser" (Strings & Loops)
function reverseWords(phrase) {
  let wordsArray = phrase.split(" ");

  let reversedArray = wordsArray.reverse();

  let reversedPhrase = reversedArray.join(" ");

  return reversedPhrase;
}
reverseWords("The dragon breathes fire");
console.log(reverseWords("The dragon breathes fire"));

// 9. Problem: "Adventurer’s Inventory Merge" (Arrays & Loops)
function mergeInventories(inventory1, inventory2) {
  let uniqueItems = [];

  let combinedInventories = inventory1.concat(inventory2);

  for (let i = 0; i < combinedInventories.length; i++) {
    let item = combinedInventories[i];

    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}
mergeInventories(["sword", "shield", "potion"], ["potion", "ring", "shield"]);
console.log(
  mergeInventories(["sword", "shield", "potion"], ["potion", "ring", "shield"])
);

// 10. Problem: "The Lost Map Fragments" (Arrays & Sorting)
function sortMapFragments(fragmentIDs) {
  fragmentIDs.sort(function (a, b) {
    return a - b;
  });

  return fragmentIDs;
}
sortMapFragments([9, 3, 5, 7, 1]);
console.log(sortMapFragments([9, 3, 5, 7, 1]));
