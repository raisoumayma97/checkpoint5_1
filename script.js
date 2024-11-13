function insertionSort(arr) {
    // Start from the second element (index 1) because the first element is trivially sorted
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];  // The element to be inserted
        let j = i - 1;  // Start comparing with the previous element

        // Move elements of arr[0..i-1], that are greater than currentElement, to one position ahead
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];  // Shift element to the right
            j--;  // Move to the previous element
        }

        // Insert the currentElement into the correct position
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage
const arr = [5, 2, 9, 1, 5, 6];
console.log("Sorted array:", insertionSort(arr));
git