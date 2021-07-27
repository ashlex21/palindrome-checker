const input = document.getElementById("input");
const button = document.getElementById("button");
console.log(input, button);

const palindrome = (str) => {
  //to filter out non-alphanumeric characters
  const regex = /[a-z0-9]/gi;
  const filteredStr = str.toLowerCase().match(regex);
  //copying the array bcz you know how JS allocates arrays
  const filteredArr = [...filteredStr];
  //reversing the array to check the order of the string
  const reverseStr = filteredArr.reverse();

  // if the order of the original string and the reverse strings matches return true otherwise false
  if (JSON.stringify(reverseStr) == JSON.stringify(filteredStr)) {
    alert(`it's a palindrome`);
  } else {
    alert(`it's not a palindrome`);
  }
};

// palindrome("five|_/|four");

button.onclick = (e) => {
  e.preventDefault();
  palindrome(input.value);
};
