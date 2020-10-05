export class MergeSort {
  sort(arr) {
    const steps = [];
    const copyArr = arr.slice();
    this.mergeSort(arr, copyArr, steps, 0, arr.length - 1);
    return steps;
  }

  mergeSort(arr, arr2, steps, begin, end) {
    if (arr.length > 1) {
      const mid = Math.floor(arr.length / 2);
      const l = arr.slice(0, mid);
      const r = arr.slice(mid);

      const midOfOriginal = Math.floor((end + begin) / 2);
      const sortedLeft = this.mergeSort(l, arr2, steps, begin, midOfOriginal);
      const sortedRight = this.mergeSort(r, arr2, steps, midOfOriginal, end);
      const merged = this.merge(sortedLeft, sortedRight);

      for (let i = 0; i < merged.length; i++) {
        arr2[begin + i] = merged[i];
      }
      const newArr = arr2.slice();
      steps.push(newArr);

      return merged;
    }

    return arr;
  }

  merge(arr1, arr2) {
    const sortedArray = Array(arr1.length + arr2.length);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        sortedArray[k] = arr1[i];
        i++;
      } else {
        sortedArray[k] = arr2[j];
        j++;
      }
      k++;
    }

    while (i < arr1.length) {
      sortedArray[k] = arr1[i];
      i++;
      k++;
    }

    while (j < arr2.length) {
      sortedArray[k] = arr2[j];
      j++;
      k++;
    }

    return sortedArray;
  }
}