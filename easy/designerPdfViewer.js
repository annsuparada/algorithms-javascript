// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently.
// There is a list of  character heights aligned by index to their letters. For example, 'a' is at index  and 'z' is at index . There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

// Example

// The heights are  and . The tallest letter is  high and there are  letters. The hightlighted area will be  so the answer is .

// Function Description

// Complete the designerPdfViewer function in the editor below.

// designerPdfViewer has the following parameter(s):

// int h[26]: the heights of each letter
// string word: a string
// Returns

// int: the size of the highlighted area

function designerPdfViewer(h, word) {
  // create a -z string
  let char = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // store a -z with word
  let storeChar = {};
  let tallest = 0;

  for (let i = 0; i < h.length; i++) {
    storeChar[char[i]] = h[i];
  }

  for (let i = 0; i < word.length; i++) {
    if (storeChar.hasOwnProperty(word[i])) {
      let tempHeight = storeChar[word[i]];
      if (tempHeight > tallest) {
        tallest = storeChar[word[i]];
      }
    }
  }

  return tallest * word.length;
}

console.log(
  designerPdfViewer(
    [
      1,
      3,
      1,
      3,
      1,
      4,
      1,
      3,
      2,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
    ],
    "abc"
  )
); //9
